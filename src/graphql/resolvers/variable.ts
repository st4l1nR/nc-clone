import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetVariableByIdArgs,
  QueryListVariableArgs,
  QueryListVariableByOrganizationIdArgs,
  QueryListVariableBySuiteIdArgs,
  MutationCreateVariableArgs,
  MutationUpdateVariableArgs,
  MutationDeleteVariableArgs,
} from '@ctypes/graphql';

export const variableQueries = {
  getVariableById: async (parent, { _id }: QueryGetVariableByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.variable.findOne({ _id });
  },
  listVariable: async (parent, { paginate, query }: QueryListVariableArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.variable.paginate({ ...mongoQuery(query) }, paginate);
  },
  listVariableByOrganizationId: async (
    parent,
    { organizationId, paginate, query }: QueryListVariableByOrganizationIdArgs,
    { models, user }
  ) => {
    return await models.variable.paginate({ organization: organizationId, ...mongoQuery(query) }, paginate);
  },
  listVariableBySuiteId: async (
    parent,
    { suiteId, paginate, query }: QueryListVariableBySuiteIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.variable.paginate({ organization: suiteId, ...mongoQuery(query) }, paginate);
  },
};

export const variableMutations = {
  createVariable: async (
    parent,
    { createVariableInput: args }: MutationCreateVariableArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newVariable = new models.variable(args);
    return await newVariable.save();
  },
  updateVariable: async (
    parent,
    { updateVariableInput: { _id, ...args } }: MutationUpdateVariableArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.variable.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteVariable: async (parent, { _id }: MutationDeleteVariableArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.variable.findByIdAndDelete(_id);
  },
};
