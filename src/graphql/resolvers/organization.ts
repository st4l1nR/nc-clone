import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetOrganizationByIdArgs,
  QueryListOrganizationArgs,
  QueryListOrganizationByUserIdArgs,
  MutationCreateOrganizationArgs,
  MutationUpdateOrganizationArgs,
  MutationDeleteOrganizationArgs,
} from '@ctypes/graphql';
export const organizationQueries = {
  getOrganizationById: async (parent, { _id }: QueryGetOrganizationByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.organization.findOne({ _id });
  },
  listOrganization: async (parent, { paginate, query }: QueryListOrganizationArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.organization.paginate({ ...mongoQuery(query) }, paginate);
  },
  listOrganizationByUserId: async (
    parent,
    { userId, paginate, query }: QueryListOrganizationByUserIdArgs,
    { models, user }
  ) => {
    return await models.organization.paginate({ user: userId, ...mongoQuery(query) }, paginate);
  },
};

export const organizationMutations = {
  createOrganization: async (
    parent,
    { createOrganizationInput: args }: MutationCreateOrganizationArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newOrganization = new models.organization(args);
    return await newOrganization.save();
  },
  updateOrganization: async (
    parent,
    { updateOrganizationInput: { _id, ...args } }: MutationUpdateOrganizationArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.organization.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteOrganization: async (parent, { _id }: MutationDeleteOrganizationArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.organization.findByIdAndDelete(_id);
  },
};
