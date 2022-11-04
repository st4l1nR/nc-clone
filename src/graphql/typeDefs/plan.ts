import { gql } from 'apollo-server-micro';

export default gql`
  type Plan {
    _id: ID!
    no: Int!
    code: String
    name: String
    price: Float
    testRuns: Int
    memberCount: Int
    private: Boolean
    yearly: Boolean
    retentionMonths: Int
    advanceScheduling: Boolean
    chrome: Boolean
    maxCsvUploadRows: Int
    screnshotSteps: Boolean
    overagePrice: Float
    user: User
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginatePlan {
    docs: [Plan]!
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

  input CreatePlanInput {
    code: String
    name: String
    price: Float
    testRuns: Int
    memberCount: Int
    private: Boolean
    yearly: Boolean
    reatentionMonths: Int
    advanceScheduling: Boolean
    chrome: Boolean
    maxCsvUploadRows: Int
    screnshotSteps: Boolean
    overagePrice: Float
  }

  input UpdatePlanInput {
    _id: ID!
    code: String
    name: String
    price: Float
    testRuns: Int
    memberCount: Int
    private: Boolean
    yearly: Boolean
    reatentionMonths: Int
    advanceScheduling: Boolean
    chrome: Boolean
    maxCsvUploadRows: Int
    screnshotSteps: Boolean
    overagePrice: Float
  }

  extend type Query {
    getPlanById(_id: ID!): Plan!
    listPlan(paginate: PaginateInput, query: String): PaginatePlan!
  }
  extend type Mutation {
    createPlan(createPlanInput: CreatePlanInput!): Plan!
    updatePlan(updatePlanInput: UpdatePlanInput!): Plan!
    deletePlan(_id: ID!): Plan!
  }
`;
