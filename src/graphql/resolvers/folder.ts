import { AuthenticationError } from 'apollo-server-micro';
import mongoQuery from '@lib/mongoQuery';
import {
  QueryGetFolderByIdArgs,
  QueryListFolderArgs,
  QueryListFolderByOrganizationIdArgs,
  MutationCreateFolderArgs,
  MutationUpdateFolderArgs,
  MutationDeleteFolderArgs,
} from '@ctypes/graphql';

export const folderQueries = {
  getFolderById: async (parent, { _id }: QueryGetFolderByIdArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.folder.findOne({ _id });
  },
  listFolder: async (parent, { paginate, query }: QueryListFolderArgs, { models, user }) => {
    if (user?.role !== 'ADMIN') throw new AuthenticationError('Not authorized');
    return await models.folder.paginate({ ...mongoQuery(query) }, paginate);
  },
  listFolderByOrganizationId: async (
    parent,
    { organizationId, paginate, query }: QueryListFolderByOrganizationIdArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.folder.paginate({ organization: organizationId, ...mongoQuery(query) }, paginate);
  },
};

export const folderMutations = {
  createFolder: async (parent, { createFolderInput: args }: MutationCreateFolderArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    const newFolder = new models.folder(args);
    return await newFolder.save();
  },
  updateFolder: async (
    parent,
    { updateFolderInput: { _id, ...args } }: MutationUpdateFolderArgs,
    { models, user }
  ) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.folder.findByIdAndUpdate(_id, args, { new: true });
  },
  deleteFolder: async (parent, { _id }: MutationDeleteFolderArgs, { models, user }) => {
    if (!user) throw new AuthenticationError('Not authorized');
    return await models.folder.findByIdAndDelete(_id);
  },
};
