import { gql } from 'apollo-server-micro';

export default gql`

  type Organization {
    _id: ID!
    no: Int!
    active:Boolean
    name:String
    email:String
    emailBilling:String
    address:String
    city:String
    country:String
    postalCode:String
    state:String
    trialExpiration:Date
    customerId:String
    subscriptionId:String
    personal:Boolean
    disallowOverages:Boolean
    disableOvargesFee:Boolean
    ssoEnabled:Boolean
    notifications:Object
    notificationsSuites:Object
    suiteCount:Int
    testCount:Int
    memberCount:Int
    plan:Plan
    card:Card
    user:User
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateOrganization {
    docs: [Organization]!
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

  input CreateOrganizationInput {
    active:Boolean
    name:String
    email:String
    emailBilling:String
    address:String
    city:String
    country:String
    postalCode:String
    state:String
  }

  input UpdateOrganizationInput {
    _id: ID!
    active:Boolean
    name:String
    email:String
    emailBilling:String
    address:String
    city:String
    country:String
    postalCode:String
    state:String
  }

  extend type Query {
    getOrganizationById(_id: ID!): Organization!
    listOrganization(paginate: PaginateInput, query: String): PaginateOrganization!
    listOrganizationByUserId(userId: ID!, paginate: PaginateInput, query: String): PaginatePlan!
  }
  extend type Mutation {
    createOrganization(createOrganizationInput: CreateOrganizationInput!): Organization!
    updateOrganization(updateOrganizationInput: UpdateOrganizationInput!): Organization!
    deleteOrganization(_id: ID!): Organization!
  }
`;
