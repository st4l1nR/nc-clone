import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetTestByIdArgs,
  QueryListTestArgs,
  QueryListTestBySuiteIdArgs,
  MutationCreateTestArgs,
  MutationUpdateTestArgs,
  MutationDeleteTestArgs,
  MutationRunLamdaTestArgs,
} from '@ctypes/graphql';
export const testQueries = {
  getTestById: async (parent, { _id }: QueryGetTestByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.test.findOne({ _id });
  },
  listTest: async (parent, { paginate, query }: QueryListTestArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.test.paginate({ ...mongoQuery(query) }, paginate);
  },
  listTestBySuiteId: async (
    parent,
    { suiteId, paginate, query }: QueryListTestBySuiteIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.test.paginate({ suite: suiteId, ...mongoQuery(query) }, paginate);
  },
};

export const testMutations = {
  createTest: async (parent, { createTestInput: args }: MutationCreateTestArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newTest = new models.test(args);
    return await newTest.save();
  },
  updateTest: async (
    parent,
    { updateTestInput: { _id, ...args } }: MutationUpdateTestArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.test.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteTest: async (parent, { _id }: MutationDeleteTestArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.test.findByIdAndDelete(_id);
  },
  runLamdaTest: async (parent, { _id }: MutationRunLamdaTestArgs, { models, user }) => {},
};
