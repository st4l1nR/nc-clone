import { AuthenticationError, ApolloError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import generateToken from '@lib/generateToken';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generateApiKey from 'generate-api-key';
import sendEmail from '@lib/sendEmail'
import {
  User,
  QueryGetUserByIdArgs,
  QueryListUserArgs,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationDeleteUserArgs,
  MutationSignInArgs,
  MutationSignUpClientArgs,
  MutationSignUpAdminArgs,
} from '@ctypes/graphql';

export const userQueries = {
  getUserById: async (parent, { _id }: QueryGetUserByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.user.findOne({ _id });
  },
  listUser: async (parent, { paginate, query }: QueryListUserArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.user.paginate({ ...mongoQuery(query) }, paginate);
  },
};

export const userMutations = {
  createUser: async (parent, { createUserInput: args }: MutationCreateUserArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    const newUser = new models.user(args);
    return await newUser.save();
  },
  updateUser: async (
    parent,
    { updateUserInput: { _id, ...args } }: MutationUpdateUserArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.user.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteUser: async (parent, { _id }: MutationDeleteUserArgs, { models, user }) => {
    return await models.user.findByIdAndDelete(_id);
  },
  signIn: async (parent, { signInInput: { email, password } }: MutationSignInArgs, { models }) => {
    const user: User = await models.user.findOne({ email, password });
    if (!user || !(await bycrypt.compare(password, user.password)))
      throw new Error('Incorrect email or password.');
    if (!user.active) throw new Error('Verify your email address');

    return {
      token: generateToken(user),
      user: user,
    };
  },
  signUpClient: async (parent, { signUpClientInput: args }: MutationSignUpClientArgs, { models, user }) => {
    // create user
    const { companyName, email, password } = args;
    const encryptedPassword = await bycrypt.hash(password, 10);
    const isRepeat = await models.user.findOne({ email });
    if (isRepeat) throw new Error('This user already exist!');
    const newUser = new models.user({
      ...args,
      password: encryptedPassword,
      apiKey: generateApiKey({ method: 'bytes', min: 25, max: 35 }),
      role: 'client',
    });
    await newUser.save();
    // create user organization
    const newOrganization = new models.organization({
      name: companyName,
      email,
      emailBilling: email,
      user: newUser._id,
    });
    await newOrganization.save();
    // send email verification
    const token = generateToken(newUser)
    sendEmail({
      email,
      subject: 'Verify your email',
      template: 'verify_email',
      variables: {
        url: `${process.env.CLIENT_URL}/auth/verify/${newUser.id}/${token}`,
      },
    });

    return {
      token: generateToken(newUser),
      user: newUser,
    };
  },
  signUpAdmin: async (parent, { signUpAdminInput: args }: MutationSignUpAdminArgs, { models, user }) => {
    const { email, password } = args;
    const encryptedPassword = await bycrypt.hash(password, 10);
    const isRepeat = await models.user.findOne({ email });
    if (isRepeat) throw new Error('This user already exist!');

    const newUser = new models.user({
      ...args,
      password: encryptedPassword,
      role: 'admin',
    });
    return {
      token: generateToken(newUser),
      user: newUser,
    };
  },
  verifyUser: async (parent, { verifyUserInput: { userId, token } }, { models, user }) => {
    try {
      jwt.verify(token, process.env.SECRET as string);
      await models.user.updateOne({ _id: userId }, { active: true });
      return {
        message: 'User verified',
      };
    } catch (error) {
      throw new AuthenticationError('Invalid token');
    }
  },
};
