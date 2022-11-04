import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetCommentByIdArgs,
  QueryListCommentArgs,
  QueryListCommentByTestIdArgs,
  MutationCreateCommentArgs,
  MutationUpdateCommentArgs,
  MutationDeleteCommentArgs,
} from '@ctypes/graphql';

export const commentQueries = {
  getCommentById: async (parent, { _id }: QueryGetCommentByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.comment.findOne({ _id });
  },
  listComment: async (parent, { paginate, query }: QueryListCommentArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.comment.paginate({ ...mongoQuery(query) }, paginate);
  },
  listCommentByTestId: async (
    parent,
    { testId, paginate, query }: QueryListCommentByTestIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.comment.paginate({ organization: testId, ...mongoQuery(query) }, paginate);
  },
};

export const commentMutations = {
  createComment: async (
    parent,
    { createCommentInput: args }: MutationCreateCommentArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newComment = new models.comment(args);
    return await newComment.save();
  },
  updateComment: async (
    parent,
    { updateCommentInput: { _id, ...args } }: MutationUpdateCommentArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.comment.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteComment: async (parent, { _id }: MutationDeleteCommentArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.comment.findByIdAndDelete(_id);
  },
};
