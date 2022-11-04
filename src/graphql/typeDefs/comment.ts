import { gql } from 'apollo-server-micro';

export default gql`
  type Comment {
    _id: ID!
    no:Int!
    message:String
    user:User
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateComment {
    docs: [Comment]!
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

  input CreateCommentInput {
    message:String
    userId:ID
  }

  input UpdateCommentInput {
    _id:ID!
    message:String
  }

  extend type Query {
    getCommentById(_id: ID!): Comment!
    listComment(paginate: PaginateInput, query: String): PaginateComment!
    listCommentByTestId(testId: ID!, paginate: PaginateInput, query: String): PaginateComment!
  }
  extend type Mutation {
    createComment(createCommentInput: CreateCommentInput!): Comment!
    updateComment(updateCommentInput: UpdateCommentInput!): Comment!
    deleteComment(_id: ID!): Comment!
  }
`;
