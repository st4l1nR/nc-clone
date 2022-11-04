import { gql } from 'apollo-server-micro';

export default gql`
  enum Command {
    click
    mouseOver
    dragAndDrop
    assign
    keypress
    screenshot
    eval
    pause
    exit
    open
    goBack
    refresh
    assertElementPresent
    assertElementNotPresent
    assertElementVisible
    assertElementNotVisible
    assertText
    assertNotText
    assertTextPresent
    assertTextNotPresent
    assertEval
    assertAccessibility
    store
    extract
    extractEval
  }
  type Test {
    _id:ID!
    no:Int!
    name:String
    startUrl:String
    steps: [Step]
    status:Int
    autoRetry:Boolean
    autoRetryTriggered:Boolean
    browser:String
    commentCount:Int
    console:[Object]
    deleted:Boolean
    disableVisuals:Boolean
    disallowInsecureCertificates:Boolean
    endUrl:String
    executionTime:Int
    failOnJavascriptError:Boolean
    filters:[Object]
    finalDelay:Int
    language:String
    maxAjaxDelay:Int
    maxWaitDelay:Int
    notifications:Object
    passing:Boolean
    screenshotCompareDifference:Object
    screenshotComparePassing:Object
    screenshotCompareThreshold:Float
    screenshot:String
    video:String
    executedStartDate:Date
    executedFinishDate:Date
    suite: Suite
    createdAt:Date!
    updatedAt:Date!
  }

  type Step {
    _id: ID!
    command: Command
    condition: Condition
    optional: Boolean
    private: Boolean
    sequence: Int
    target: String
    value: String
    variableName: String
    notes: String
    extra: Extra
    file: String
  }

  type Condition {
    statment: String
    result: Boolean
  }

  type Extra {
    simulated: Boolean
    shift: Boolean
    alt: Boolean
  }

  type PaginateTest {
    docs: [Test]!
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

  input StepInput {
    command: Command
    condition: ConditionInput
    optional: Boolean
    private: Boolean
    sequence: Int
    target: String
    value: String
    variableName: String
    notes: String
    extra: ExtraInput
    file: String
  }

  input ConditionInput {
    statment: String
    result: Boolean
  }

  input ExtraInput {
    simulated: Boolean
    shift: Boolean
    alt: Boolean
  }

  input CreateTestInput {
    startUrl:String
    steps: [StepInput]
    status:Int
    autoRetry:Boolean
    autoRetryTriggered:Boolean
    browser:String
    commentCount:Int
    console:[Object]
    deleted:Boolean
    disableVisuals:Boolean
    disallowInsecureCertificates:Boolean
    endUrl:String
    executionTime:Int
    failOnJavascriptError:Boolean
    filters:[Object]
    finalDelay:Int
    language:String
    maxAjaxDelay:Int
    maxWaitDelay:Int
    notifications:Object
    name:String
    passing:Boolean
    screenshotCompareDifference:Object
    screenshotComparedPassing:Object
    screenshotCompareThreshold:Float
    screenshot:Object
    video:Object
    executedStartDate:Date
    executedFinishDate:Date
    suiteId: ID
  }

  input UpdateTestInput {
    _id: ID!
    startUrl:String
    steps: [StepInput]
    status:Int
    autoRetry:Boolean
    autoRetryTriggered:Boolean
    browser:String
    commentCount:Int
    console:[Object]
    deleted:Boolean
    disableVisuals:Boolean
    disallowInsecureCertificates:Boolean
    endUrl:String
    executionTime:Int
    failOnJavascriptError:Boolean
    filters:[Object]
    finalDelay:Int
    language:String
    maxAjaxDelay:Int
    maxWaitDelay:Int
    notifications:Object
    name:String
    passing:Boolean
    screenshotCompareDifference:Object
    screenshotComparedPassing:Object
    screenshotCompareThreshold:Float
    screenshot:Object
    video:Object
    executedStartDate:Date
    executedFinishDate:Date
    suiteId: ID
  }

  extend type Query {
    getTestById(_id: ID!): Test!
    listTest(paginate: PaginateInput, query: String): PaginateTest!
    listTestBySuiteId(suiteId: ID!, paginate: PaginateInput, query: String): PaginateSuite!
  }

  extend type Mutation {
    createTest(createTestInput: CreateTestInput!): Test!
    updateTest(updateTestInput: UpdateTestInput!): Test!
    deleteTest(_id: ID!): Test!
    runLamdaTest(_id: ID!): Test!
  }
`;
