import { gql } from 'apollo-server-micro';

export default gql`
  enum MemberRole {
    owner
    admin
    user
  }
  type Member {
    _id: ID!
    no: Int!
    user:User!
    role:MemberRole!
    organization:Organization!
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateMember {
    docs: [Member]!
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

  input CreateMemberInput {
    userId:ID!
    organizationId:ID!
    role:MemberRole!
  }

  input UpdateMemberInput {
    _id: ID!
    role:MemberRole
  }

  extend type Query {
    getMemberById(_id: ID!): Member!
    listMember(paginate: PaginateInput, query: String): PaginateMember!
    listMemberByOrganizationId(organizationId: ID!, paginate: PaginateInput, query: String): PaginateMember!
  }
  extend type Mutation {
    createMember(createMemberInput: CreateMemberInput!): Member!
    updateMember(updateMemberInput: UpdateMemberInput!): Member!
    deleteMember(_id: ID!): Member!
  }
`;
