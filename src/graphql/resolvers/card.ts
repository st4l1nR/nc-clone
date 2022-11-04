import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetCardByIdArgs,
  QueryListCardArgs,
  MutationCreateCardArgs,
  MutationUpdateCardArgs,
  MutationDeleteCardArgs,
} from '@ctypes/graphql';
export const cardQueries = {
  getCardById: async (parent, { _id }: QueryGetCardByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.card.findOne({ _id });
  },
  listCard: async (parent, { paginate, query }: QueryListCardArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.card.paginate({ ...mongoQuery(query) }, paginate);
  },
};

export const cardMutations = {
  createCard: async (parent, { createCardInput: args }: MutationCreateCardArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newCard = new models.card(args);
    return await newCard.save();
  },
  updateCard: async (
    parent,
    { updateCardInput: { _id, ...args } }: MutationUpdateCardArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.card.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteCard: async (parent, { _id }: MutationDeleteCardArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.card.findByIdAndDelete(_id);
  },
};
