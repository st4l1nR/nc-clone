import { gql } from 'apollo-server-micro';

export default gql`
  type Suite {
    _id: ID!
    no:Int
    name:String
    abortOnTestFailure:Boolean
    autoRetry:Boolean
    browser:String
    dataSource:String
    disableVisuals:Boolean
    disallowInsecureCertificaties:Boolean
    failOnJavascriptError:Boolean
    finalDelay:Int
    golabalStepDelay:Int
    languange:String
    maxAjaxDelay:Int
    maxConcurrentDataRows:Int
    maxConcurrentTests:Int
    maxWaitDelay:Int
    folder:Folder
    executedAt:Date
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateSuite {
    docs: [Suite]!
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

  input CreateSuiteInput {
    name:String
    abortOnTestFailure:Boolean
    autoRetry:Boolean
    browser:String
    dataSource:String
    disableVisuals:Boolean
    disallowInsecureCertificaties:Boolean
    failOnJavascriptError:Boolean
    finalDelay:Int
    golablStepDelay:Int
    languange:String
    maxAjaxDelay:Int
    maxConcurrentDataRows:Int
    maxConcurrentTests:Int
    maxWaitDelay:Int
    variables:[ID]
    folderId:ID
    executedAt:Date
  }

  input UpdateSuiteInput {
    _id:ID!
    name:String
    abortOnTestFailure:Boolean
    autoRetry:Boolean
    browser:String
    dataSource:String
    disableVisuals:Boolean
    disallowInsecureCertificaties:Boolean
    failOnJavascriptError:Boolean
    finalDelay:Int
    golablStepDelay:Int
    languange:String
    maxAjaxDelay:Int
    maxConcurrentDataRows:Int
    maxConcurrentTests:Int
    maxWaitDelay:Int
    variables:[ID]
    folderId:ID
  }

  extend type Query {
    getSuiteById(_id: ID!): Suite!
    listSuite(paginate: PaginateInput, query: String): PaginateSuite!
    listSuiteByFolderId(folderId: ID!, paginate: PaginateInput, query: String): PaginateSuite!
  }
  extend type Mutation {
    createSuite(createSuiteInput: CreateSuiteInput!): Suite!
    updateSuite(updateSuiteInput: UpdateSuiteInput!): Suite!
    deleteSuite(_id: ID!): Suite!
  }
`;
