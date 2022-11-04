import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetMemberByIdArgs,
  QueryListMemberArgs,
  QueryListMemberByOrganizationIdArgs,
  MutationCreateMemberArgs,
  MutationUpdateMemberArgs,
  MutationDeleteMemberArgs,
} from '@ctypes/graphql';
export const memberQueries = {
  getMemberById: async (parent, { _id }: QueryGetMemberByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.member.findOne({ _id });
  },
  listMember: async (parent, { paginate, query }: QueryListMemberArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.member.paginate({ ...mongoQuery(query) }, paginate);
  },
  listMemberByOrganizationId: async (
    parent,
    { organizationId, paginate, query }: QueryListMemberByOrganizationIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.member.paginate({ organization: organizationId, ...mongoQuery(query) }, paginate);
  },
};

export const memberMutations = {
  createMember: async (parent, { createMemberInput: args }: MutationCreateMemberArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newMember = new models.member(args);
    return await newMember.save();
  },
  updateMember: async (
    parent,
    { updateMemberInput: { _id, ...args } }: MutationUpdateMemberArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.member.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteMember: async (parent, { _id }: MutationDeleteMemberArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.member.findByIdAndDelete(_id);
  },
};
