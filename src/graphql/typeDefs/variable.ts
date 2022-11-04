import { gql } from 'apollo-server-micro';

export default gql`
  type Variable {
    _id: ID!
    no:Int!
    name:String
    value:String
    private:Boolean
    organization:Organization
    suite:Suite
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateVariable {
    docs: [Variable]!
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

  input CreateVariableInput {
    name:String
    value:String
    private:Boolean
    organizationId:ID
    suiteId:ID
  }

  input UpdateVariableInput {
    _id:ID!
    name:String
    value:String
    private:Boolean
    organizationId:ID
    suiteId:ID
  }

  extend type Query {
    getVariableById(_id: ID!): Variable!
    listVariable(paginate: PaginateInput, query: String): PaginateVariable!
    listVariableByOrganizationId(organizationId: ID!, paginate: PaginateInput, query: String): PaginateVariable!
    listVariableBySuiteId(suiteId: ID!, paginate: PaginateInput, query: String): PaginateVariable!
  }
  extend type Mutation {
    createVariable(createVariableInput: CreateVariableInput!): Variable!
    updateVariable(updateVariableInput: UpdateVariableInput!): Variable!
    deleteVariable(_id: ID!): Variable!
  }
`;
