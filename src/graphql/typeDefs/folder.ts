import { gql } from 'apollo-server-micro';

export default gql`
  type Folder {
    _id: ID!
    no:Int!
    name:String
    organization:Organization
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateFolder {
    docs: [Folder]!
    totalDocs: Int!
    limit: Int!
    hasPrevPage: Boolean!
    hasNextPage: Boolean!
    page: Int!
    totalPages: Int!
    offset: Int
    prevPage: Int
    nextPage: Int
    pagingCounter: Int!
    meta: Object
  }

  input CreateFolderInput {
    name:String!
    organizationId:ID!
  }

  input UpdateFolderInput {
    _id:ID!
    name:String
  }

  extend type Query {
    getFolderById(_id: ID!): Folder!
    listFolder(paginate: PaginateInput, query: String): PaginateFolder!
    listFolderByOrganizationId(organizationId: ID!, paginate: PaginateInput, query: String): PaginateFolder!
  }
  extend type Mutation {
    createFolder(createFolderInput: CreateFolderInput!): Folder!
    updateFolder(updateFolderInput: UpdateFolderInput!): Folder!
    deleteFolder(_id: ID!): Folder!
  }
`;
