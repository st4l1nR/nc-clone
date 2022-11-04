import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetSuiteByIdArgs,
  QueryListSuiteArgs,
  QueryListSuiteByFolderIdArgs,
  MutationCreateSuiteArgs,
  MutationUpdateSuiteArgs,
  MutationDeleteSuiteArgs,
} from '@ctypes/graphql';

export const suiteQueries = {
  getSuiteById: async (parent, { _id }: QueryGetSuiteByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.suite.findOne({ _id });
  },
  listSuite: async (parent, { paginate, query }: QueryListSuiteArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.suite.paginate({ ...mongoQuery(query) }, paginate);
  },
  listSuiteByFolderId: async (
    parent,
    { folderId, paginate, query }: QueryListSuiteByFolderIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.suite.paginate({ organization: folderId, ...mongoQuery(query) }, paginate);
  },
};

export const suiteMutations = {
  createSuite: async (parent, { createSuiteInput: args }: MutationCreateSuiteArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newSuite = new models.suite(args);
    return await newSuite.save();
  },
  updateSuite: async (
    parent,
    { updateSuiteInput: { _id, ...args } }: MutationUpdateSuiteArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.suite.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteSuite: async (parent, { _id }: MutationDeleteSuiteArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.suite.findByIdAndDelete(_id);
  },
};
