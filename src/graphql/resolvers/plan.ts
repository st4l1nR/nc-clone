import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetPlanByIdArgs,
  QueryListPlanArgs,
  MutationCreatePlanArgs,
  MutationUpdatePlanArgs,
  MutationDeletePlanArgs,
} from '@ctypes/graphql';
export const planQueries = {
  getPlanById: async (parent, { _id }: QueryGetPlanByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.plan.findOne({ _id });
  },
  listPlan: async (parent, { paginate, query }: QueryListPlanArgs, { models, user }) => {
    return await models.plan.paginate({ ...mongoQuery(query) }, paginate);
  },
};

export const planMutations = {
  createPlan: async (parent, { createPlanInput: args }: MutationCreatePlanArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newPlan = new models.plan(args);
    return await newPlan.save();
  },
  updatePlan: async (
    parent,
    { updatePlanInput: { _id, ...args } }: MutationUpdatePlanArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.plan.findByIdAndUpdate(_id, args, { new: true });
  },
  deletePlan: async (parent, { _id }: MutationDeletePlanArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.plan.findByIdAndDelete(_id);
  },
};
