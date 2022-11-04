import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Object: any;
  Upload: any;
};

export type Card = {
  __typename?: 'Card';
  _id: Scalars['ID'];
  cardType?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export enum Command {
  AssertAccessibility = 'assertAccessibility',
  AssertElementNotPresent = 'assertElementNotPresent',
  AssertElementNotVisible = 'assertElementNotVisible',
  AssertElementPresent = 'assertElementPresent',
  AssertElementVisible = 'assertElementVisible',
  AssertEval = 'assertEval',
  AssertNotText = 'assertNotText',
  AssertText = 'assertText',
  AssertTextNotPresent = 'assertTextNotPresent',
  AssertTextPresent = 'assertTextPresent',
  Assign = 'assign',
  Click = 'click',
  DragAndDrop = 'dragAndDrop',
  Eval = 'eval',
  Exit = 'exit',
  Extract = 'extract',
  ExtractEval = 'extractEval',
  GoBack = 'goBack',
  Keypress = 'keypress',
  MouseOver = 'mouseOver',
  Open = 'open',
  Pause = 'pause',
  Refresh = 'refresh',
  Screenshot = 'screenshot',
  Store = 'store'
}

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
  message?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export type Condition = {
  __typename?: 'Condition';
  result?: Maybe<Scalars['Boolean']>;
  statment?: Maybe<Scalars['String']>;
};

export type ConditionInput = {
  result?: InputMaybe<Scalars['Boolean']>;
  statment?: InputMaybe<Scalars['String']>;
};

export type CreateCardInput = {
  cardType?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
};

export type CreateCommentInput = {
  message?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateFolderInput = {
  name: Scalars['String'];
  organizationId: Scalars['ID'];
};

export type CreateMemberInput = {
  organizationId: Scalars['ID'];
  role: MemberRole;
  userId: Scalars['ID'];
};

export type CreateOrganizationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailBilling?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type CreatePlanInput = {
  advanceScheduling?: InputMaybe<Scalars['Boolean']>;
  chrome?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  maxCsvUploadRows?: InputMaybe<Scalars['Int']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  overagePrice?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  private?: InputMaybe<Scalars['Boolean']>;
  reatentionMonths?: InputMaybe<Scalars['Int']>;
  screnshotSteps?: InputMaybe<Scalars['Boolean']>;
  testRuns?: InputMaybe<Scalars['Int']>;
  yearly?: InputMaybe<Scalars['Boolean']>;
};

export type CreateSuiteInput = {
  abortOnTestFailure?: InputMaybe<Scalars['Boolean']>;
  autoRetry?: InputMaybe<Scalars['Boolean']>;
  browser?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  disableVisuals?: InputMaybe<Scalars['Boolean']>;
  disallowInsecureCertificaties?: InputMaybe<Scalars['Boolean']>;
  executedAt?: InputMaybe<Scalars['Date']>;
  failOnJavascriptError?: InputMaybe<Scalars['Boolean']>;
  finalDelay?: InputMaybe<Scalars['Int']>;
  folderId?: InputMaybe<Scalars['ID']>;
  golablStepDelay?: InputMaybe<Scalars['Int']>;
  languange?: InputMaybe<Scalars['String']>;
  maxAjaxDelay?: InputMaybe<Scalars['Int']>;
  maxConcurrentDataRows?: InputMaybe<Scalars['Int']>;
  maxConcurrentTests?: InputMaybe<Scalars['Int']>;
  maxWaitDelay?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  variables?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CreateTestInput = {
  autoRetry?: InputMaybe<Scalars['Boolean']>;
  autoRetryTriggered?: InputMaybe<Scalars['Boolean']>;
  browser?: InputMaybe<Scalars['String']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  console?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  disableVisuals?: InputMaybe<Scalars['Boolean']>;
  disallowInsecureCertificates?: InputMaybe<Scalars['Boolean']>;
  endUrl?: InputMaybe<Scalars['String']>;
  executedFinishDate?: InputMaybe<Scalars['Date']>;
  executedStartDate?: InputMaybe<Scalars['Date']>;
  executionTime?: InputMaybe<Scalars['Int']>;
  failOnJavascriptError?: InputMaybe<Scalars['Boolean']>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>;
  finalDelay?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  maxAjaxDelay?: InputMaybe<Scalars['Int']>;
  maxWaitDelay?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['Object']>;
  passing?: InputMaybe<Scalars['Boolean']>;
  screenshot?: InputMaybe<Scalars['Object']>;
  screenshotCompareDifference?: InputMaybe<Scalars['Object']>;
  screenshotCompareThreshold?: InputMaybe<Scalars['Float']>;
  screenshotComparedPassing?: InputMaybe<Scalars['Object']>;
  startUrl?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Array<InputMaybe<StepInput>>>;
  suiteId?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['Object']>;
};

export type CreateUserInput = {
  companyName?: InputMaybe<Scalars['String']>;
  companySize?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
};

export type CreateVariableInput = {
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  private?: InputMaybe<Scalars['Boolean']>;
  suiteId?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Extra = {
  __typename?: 'Extra';
  alt?: Maybe<Scalars['Boolean']>;
  shift?: Maybe<Scalars['Boolean']>;
  simulated?: Maybe<Scalars['Boolean']>;
};

export type ExtraInput = {
  alt?: InputMaybe<Scalars['Boolean']>;
  shift?: InputMaybe<Scalars['Boolean']>;
  simulated?: InputMaybe<Scalars['Boolean']>;
};

export type Folder = {
  __typename?: 'Folder';
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
  name?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  organization?: Maybe<Organization>;
  updatedAt: Scalars['Date'];
};

export type Member = {
  __typename?: 'Member';
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
  no: Scalars['Int'];
  organization: Organization;
  role: MemberRole;
  updatedAt: Scalars['Date'];
  user: User;
};

export enum MemberRole {
  Admin = 'admin',
  Owner = 'owner',
  User = 'user'
}

export type MultipleUploadResponse = {
  __typename?: 'MultipleUploadResponse';
  urls: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createCard: Card;
  createComment: Comment;
  createFolder: Folder;
  createMember: Member;
  createOrganization: Organization;
  createPlan: Plan;
  createSuite: Suite;
  createTest: Test;
  createUser: User;
  createVariable: Variable;
  deleteCard: Card;
  deleteComment: Comment;
  deleteFolder: Folder;
  deleteMember: Member;
  deleteOrganization: Organization;
  deletePlan: Plan;
  deleteSuite: Suite;
  deleteTest: Test;
  deleteUser: User;
  deleteVariable: Variable;
  multipleUpload: MultipleUploadResponse;
  runLamdaTest: Test;
  signIn: Session;
  signUpAdmin: Session;
  signUpClient: Session;
  singleUpload: SingleUploadResponse;
  updateCard: Card;
  updateComment: Comment;
  updateFolder: Folder;
  updateMember: Member;
  updateOrganization: Organization;
  updatePlan: Plan;
  updateSuite: Suite;
  updateTest: Test;
  updateUser: User;
  updateVariable: Variable;
};


export type MutationCreateCardArgs = {
  createCardInput: CreateCardInput;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateFolderArgs = {
  createFolderInput: CreateFolderInput;
};


export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};


export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanInput;
};


export type MutationCreateSuiteArgs = {
  createSuiteInput: CreateSuiteInput;
};


export type MutationCreateTestArgs = {
  createTestInput: CreateTestInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateVariableArgs = {
  createVariableInput: CreateVariableInput;
};


export type MutationDeleteCardArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteFolderArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteOrganizationArgs = {
  _id: Scalars['ID'];
};


export type MutationDeletePlanArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteSuiteArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteTestArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteVariableArgs = {
  _id: Scalars['ID'];
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationRunLamdaTestArgs = {
  _id: Scalars['ID'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpAdminArgs = {
  signUpAdminInput: SignUpAdminInput;
};


export type MutationSignUpClientArgs = {
  signUpClientInput: SignUpClientInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateCardArgs = {
  updateCardInput: UpdateCardInput;
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateCommentInput;
};


export type MutationUpdateFolderArgs = {
  updateFolderInput: UpdateFolderInput;
};


export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};


export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationInput;
};


export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanInput;
};


export type MutationUpdateSuiteArgs = {
  updateSuiteInput: UpdateSuiteInput;
};


export type MutationUpdateTestArgs = {
  updateTestInput: UpdateTestInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateVariableArgs = {
  updateVariableInput: UpdateVariableInput;
};

export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['ID'];
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  card?: Maybe<Card>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  customerId?: Maybe<Scalars['String']>;
  disableOvargesFee?: Maybe<Scalars['Boolean']>;
  disallowOverages?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  emailBilling?: Maybe<Scalars['String']>;
  memberCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  notifications?: Maybe<Scalars['Object']>;
  notificationsSuites?: Maybe<Scalars['Object']>;
  personal?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<Plan>;
  postalCode?: Maybe<Scalars['String']>;
  ssoEnabled?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  suiteCount?: Maybe<Scalars['Int']>;
  testCount?: Maybe<Scalars['Int']>;
  trialExpiration?: Maybe<Scalars['Date']>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export type PaginateCard = {
  __typename?: 'PaginateCard';
  docs: Array<Maybe<Card>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateComment = {
  __typename?: 'PaginateComment';
  docs: Array<Maybe<Comment>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateFolder = {
  __typename?: 'PaginateFolder';
  docs: Array<Maybe<Folder>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Object']>;
};

export type PaginateMember = {
  __typename?: 'PaginateMember';
  docs: Array<Maybe<Member>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateOrganization = {
  __typename?: 'PaginateOrganization';
  docs: Array<Maybe<Organization>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginatePlan = {
  __typename?: 'PaginatePlan';
  docs: Array<Maybe<Plan>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateSuite = {
  __typename?: 'PaginateSuite';
  docs: Array<Maybe<Suite>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateTest = {
  __typename?: 'PaginateTest';
  docs: Array<Maybe<Test>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateUser = {
  __typename?: 'PaginateUser';
  docs: Array<Maybe<User>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginateVariable = {
  __typename?: 'PaginateVariable';
  docs: Array<Maybe<Variable>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  meta?: Maybe<Scalars['Object']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Plan = {
  __typename?: 'Plan';
  _id: Scalars['ID'];
  advanceScheduling?: Maybe<Scalars['Boolean']>;
  chrome?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  maxCsvUploadRows?: Maybe<Scalars['Int']>;
  memberCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  overagePrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  private?: Maybe<Scalars['Boolean']>;
  retentionMonths?: Maybe<Scalars['Int']>;
  screnshotSteps?: Maybe<Scalars['Boolean']>;
  testRuns?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
  yearly?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getCardById: Card;
  getCommentById: Comment;
  getFolderById: Folder;
  getMemberById: Member;
  getOrganizationById: Organization;
  getPlanById: Plan;
  getSuiteById: Suite;
  getTestById: Test;
  getUserById: User;
  getVariableById: Variable;
  listCard: PaginateCard;
  listComment: PaginateComment;
  listCommentByTestId: PaginateComment;
  listFolder: PaginateFolder;
  listFolderByOrganizationId: PaginateFolder;
  listMember: PaginateMember;
  listMemberByOrganizationId: PaginateMember;
  listOrganization: PaginateOrganization;
  listOrganizationByUserId: PaginatePlan;
  listPlan: PaginatePlan;
  listSuite: PaginateSuite;
  listSuiteByFolderId: PaginateSuite;
  listTest: PaginateTest;
  listTestBySuiteId: PaginateSuite;
  listUser: PaginateUser;
  listVariable: PaginateVariable;
  listVariableByOrganizationId: PaginateVariable;
  listVariableBySuiteId: PaginateVariable;
};


export type QueryGetCardByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetCommentByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetFolderByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetMemberByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetOrganizationByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetPlanByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetSuiteByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetTestByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetVariableByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryListCardArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListCommentArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListCommentByTestIdArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
  testId: Scalars['ID'];
};


export type QueryListFolderArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListFolderByOrganizationIdArgs = {
  organizationId: Scalars['ID'];
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListMemberArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListMemberByOrganizationIdArgs = {
  organizationId: Scalars['ID'];
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListOrganizationArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListOrganizationByUserIdArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type QueryListPlanArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListSuiteArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListSuiteByFolderIdArgs = {
  folderId: Scalars['ID'];
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListTestArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListTestBySuiteIdArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
  suiteId: Scalars['ID'];
};


export type QueryListUserArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListVariableArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListVariableByOrganizationIdArgs = {
  organizationId: Scalars['ID'];
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryListVariableBySuiteIdArgs = {
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
  suiteId: Scalars['ID'];
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String'];
  user: User;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpAdminInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpClientInput = {
  companyName: Scalars['String'];
  companySize: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  ipAddress: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  position: Scalars['String'];
};

export type SingleUploadResponse = {
  __typename?: 'SingleUploadResponse';
  url: Scalars['String'];
};

export type Step = {
  __typename?: 'Step';
  _id: Scalars['ID'];
  command?: Maybe<Command>;
  condition?: Maybe<Condition>;
  extra?: Maybe<Extra>;
  file?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  optional?: Maybe<Scalars['Boolean']>;
  private?: Maybe<Scalars['Boolean']>;
  sequence?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  variableName?: Maybe<Scalars['String']>;
};

export type StepInput = {
  command?: InputMaybe<Command>;
  condition?: InputMaybe<ConditionInput>;
  extra?: InputMaybe<ExtraInput>;
  file?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  optional?: InputMaybe<Scalars['Boolean']>;
  private?: InputMaybe<Scalars['Boolean']>;
  sequence?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  variableName?: InputMaybe<Scalars['String']>;
};

export type Suite = {
  __typename?: 'Suite';
  _id: Scalars['ID'];
  abortOnTestFailure?: Maybe<Scalars['Boolean']>;
  autoRetry?: Maybe<Scalars['Boolean']>;
  browser?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  dataSource?: Maybe<Scalars['String']>;
  disableVisuals?: Maybe<Scalars['Boolean']>;
  disallowInsecureCertificaties?: Maybe<Scalars['Boolean']>;
  executedAt?: Maybe<Scalars['Date']>;
  failOnJavascriptError?: Maybe<Scalars['Boolean']>;
  finalDelay?: Maybe<Scalars['Int']>;
  folder?: Maybe<Folder>;
  golabalStepDelay?: Maybe<Scalars['Int']>;
  languange?: Maybe<Scalars['String']>;
  maxAjaxDelay?: Maybe<Scalars['Int']>;
  maxConcurrentDataRows?: Maybe<Scalars['Int']>;
  maxConcurrentTests?: Maybe<Scalars['Int']>;
  maxWaitDelay?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Date'];
};

export type Test = {
  __typename?: 'Test';
  _id: Scalars['ID'];
  autoRetry?: Maybe<Scalars['Boolean']>;
  autoRetryTriggered?: Maybe<Scalars['Boolean']>;
  browser?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  console?: Maybe<Array<Maybe<Scalars['Object']>>>;
  createdAt: Scalars['Date'];
  deleted?: Maybe<Scalars['Boolean']>;
  disableVisuals?: Maybe<Scalars['Boolean']>;
  disallowInsecureCertificates?: Maybe<Scalars['Boolean']>;
  endUrl?: Maybe<Scalars['String']>;
  executedFinishDate?: Maybe<Scalars['Date']>;
  executedStartDate?: Maybe<Scalars['Date']>;
  executionTime?: Maybe<Scalars['Int']>;
  failOnJavascriptError?: Maybe<Scalars['Boolean']>;
  filters?: Maybe<Array<Maybe<Scalars['Object']>>>;
  finalDelay?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  maxAjaxDelay?: Maybe<Scalars['Int']>;
  maxWaitDelay?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  notifications?: Maybe<Scalars['Object']>;
  passing?: Maybe<Scalars['Boolean']>;
  screenshot?: Maybe<Scalars['String']>;
  screenshotCompareDifference?: Maybe<Scalars['Object']>;
  screenshotComparePassing?: Maybe<Scalars['Object']>;
  screenshotCompareThreshold?: Maybe<Scalars['Float']>;
  startUrl?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<Step>>>;
  suite?: Maybe<Suite>;
  updatedAt: Scalars['Date'];
  video?: Maybe<Scalars['String']>;
};

export type UpdateCardInput = {
  _id: Scalars['ID'];
  cardType?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  _id: Scalars['ID'];
  message?: InputMaybe<Scalars['String']>;
};

export type UpdateFolderInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMemberInput = {
  _id: Scalars['ID'];
  role?: InputMaybe<MemberRole>;
};

export type UpdateOrganizationInput = {
  _id: Scalars['ID'];
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailBilling?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type UpdatePlanInput = {
  _id: Scalars['ID'];
  advanceScheduling?: InputMaybe<Scalars['Boolean']>;
  chrome?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  maxCsvUploadRows?: InputMaybe<Scalars['Int']>;
  memberCount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  overagePrice?: InputMaybe<Scalars['Float']>;
  price?: InputMaybe<Scalars['Float']>;
  private?: InputMaybe<Scalars['Boolean']>;
  reatentionMonths?: InputMaybe<Scalars['Int']>;
  screnshotSteps?: InputMaybe<Scalars['Boolean']>;
  testRuns?: InputMaybe<Scalars['Int']>;
  yearly?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateSuiteInput = {
  _id: Scalars['ID'];
  abortOnTestFailure?: InputMaybe<Scalars['Boolean']>;
  autoRetry?: InputMaybe<Scalars['Boolean']>;
  browser?: InputMaybe<Scalars['String']>;
  dataSource?: InputMaybe<Scalars['String']>;
  disableVisuals?: InputMaybe<Scalars['Boolean']>;
  disallowInsecureCertificaties?: InputMaybe<Scalars['Boolean']>;
  failOnJavascriptError?: InputMaybe<Scalars['Boolean']>;
  finalDelay?: InputMaybe<Scalars['Int']>;
  folderId?: InputMaybe<Scalars['ID']>;
  golablStepDelay?: InputMaybe<Scalars['Int']>;
  languange?: InputMaybe<Scalars['String']>;
  maxAjaxDelay?: InputMaybe<Scalars['Int']>;
  maxConcurrentDataRows?: InputMaybe<Scalars['Int']>;
  maxConcurrentTests?: InputMaybe<Scalars['Int']>;
  maxWaitDelay?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  variables?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UpdateTestInput = {
  _id: Scalars['ID'];
  autoRetry?: InputMaybe<Scalars['Boolean']>;
  autoRetryTriggered?: InputMaybe<Scalars['Boolean']>;
  browser?: InputMaybe<Scalars['String']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  console?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  disableVisuals?: InputMaybe<Scalars['Boolean']>;
  disallowInsecureCertificates?: InputMaybe<Scalars['Boolean']>;
  endUrl?: InputMaybe<Scalars['String']>;
  executedFinishDate?: InputMaybe<Scalars['Date']>;
  executedStartDate?: InputMaybe<Scalars['Date']>;
  executionTime?: InputMaybe<Scalars['Int']>;
  failOnJavascriptError?: InputMaybe<Scalars['Boolean']>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>;
  finalDelay?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  maxAjaxDelay?: InputMaybe<Scalars['Int']>;
  maxWaitDelay?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['Object']>;
  passing?: InputMaybe<Scalars['Boolean']>;
  screenshot?: InputMaybe<Scalars['Object']>;
  screenshotCompareDifference?: InputMaybe<Scalars['Object']>;
  screenshotCompareThreshold?: InputMaybe<Scalars['Float']>;
  screenshotComparedPassing?: InputMaybe<Scalars['Object']>;
  startUrl?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  steps?: InputMaybe<Array<InputMaybe<StepInput>>>;
  suiteId?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['Object']>;
};

export type UpdateUserInput = {
  _id: Scalars['ID'];
  active?: InputMaybe<Scalars['Boolean']>;
  apiKey?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  companySize?: InputMaybe<Scalars['Int']>;
  darkMode?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
  twoFactorAuthEnabled?: InputMaybe<Scalars['Boolean']>;
  twoFactorRecoveryCodeCount?: InputMaybe<Scalars['Int']>;
};

export type UpdateVariableInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  private?: InputMaybe<Scalars['Boolean']>;
  suiteId?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  active: Scalars['Boolean'];
  apiKey?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companySize?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  darkMode?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  no: Scalars['Int'];
  password: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  role: UserRole;
  twoFactorAuthEnabled?: Maybe<Scalars['Boolean']>;
  twoFactorRecoveryCodeCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Date'];
};

export enum UserRole {
  Admin = 'admin',
  Client = 'client'
}

export type Variable = {
  __typename?: 'Variable';
  _id: Scalars['ID'];
  createdAt: Scalars['Date'];
  name?: Maybe<Scalars['String']>;
  no: Scalars['Int'];
  organization?: Maybe<Organization>;
  private?: Maybe<Scalars['Boolean']>;
  suite?: Maybe<Suite>;
  updatedAt: Scalars['Date'];
  value?: Maybe<Scalars['String']>;
};

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload: { __typename?: 'SingleUploadResponse', url: string } };

export type MultipleUploadMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type MultipleUploadMutation = { __typename?: 'Mutation', multipleUpload: { __typename?: 'MultipleUploadResponse', urls: Array<string> } };

export type ListUserQueryVariables = Exact<{
  paginate?: InputMaybe<PaginateInput>;
  query?: InputMaybe<Scalars['String']>;
}>;


export type ListUserQuery = { __typename?: 'Query', listUser: { __typename?: 'PaginateUser', totalDocs: number, limit: number, hasPrevPage: boolean, hasNextPage: boolean, page: number, totalPages: number, offset?: number | null, prevPage?: number | null, nextPage?: number | null, pagingCounter: number, meta?: any | null, docs: Array<{ __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } | null> } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } };

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Session', token: string, user: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } } };

export type SignUpClientMutationVariables = Exact<{
  signUpClientInput: SignUpClientInput;
}>;


export type SignUpClientMutation = { __typename?: 'Mutation', signUpClient: { __typename?: 'Session', token: string, user: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } } };

export type SignUpAdminMutationVariables = Exact<{
  signUpAdminInput: SignUpAdminInput;
}>;


export type SignUpAdminMutation = { __typename?: 'Mutation', signUpAdmin: { __typename?: 'Session', token: string, user: { __typename?: 'User', _id: string, no: number, active: boolean, avatar?: string | null, firstName: string, lastName: string, email: string, password: string, role: UserRole, companyName?: string | null, companySize?: number | null, position?: string | null, ipAddress?: string | null, apiKey?: string | null, darkMode?: boolean | null, twoFactorAuthEnabled?: boolean | null, twoFactorRecoveryCodeCount?: number | null, createdAt: any, updatedAt: any } } };


export const SingleUploadDocument = gql`
    mutation singleUpload($file: Upload!) {
  singleUpload(file: $file) {
    url
  }
}
    `;
export type SingleUploadMutationFn = Apollo.MutationFunction<SingleUploadMutation, SingleUploadMutationVariables>;

/**
 * __useSingleUploadMutation__
 *
 * To run a mutation, you first call `useSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singleUploadMutation, { data, loading, error }] = useSingleUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSingleUploadMutation(baseOptions?: Apollo.MutationHookOptions<SingleUploadMutation, SingleUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingleUploadMutation, SingleUploadMutationVariables>(SingleUploadDocument, options);
      }
export type SingleUploadMutationHookResult = ReturnType<typeof useSingleUploadMutation>;
export type SingleUploadMutationResult = Apollo.MutationResult<SingleUploadMutation>;
export type SingleUploadMutationOptions = Apollo.BaseMutationOptions<SingleUploadMutation, SingleUploadMutationVariables>;
export const MultipleUploadDocument = gql`
    mutation multipleUpload($files: [Upload!]!) {
  multipleUpload(files: $files) {
    urls
  }
}
    `;
export type MultipleUploadMutationFn = Apollo.MutationFunction<MultipleUploadMutation, MultipleUploadMutationVariables>;

/**
 * __useMultipleUploadMutation__
 *
 * To run a mutation, you first call `useMultipleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMultipleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [multipleUploadMutation, { data, loading, error }] = useMultipleUploadMutation({
 *   variables: {
 *      files: // value for 'files'
 *   },
 * });
 */
export function useMultipleUploadMutation(baseOptions?: Apollo.MutationHookOptions<MultipleUploadMutation, MultipleUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MultipleUploadMutation, MultipleUploadMutationVariables>(MultipleUploadDocument, options);
      }
export type MultipleUploadMutationHookResult = ReturnType<typeof useMultipleUploadMutation>;
export type MultipleUploadMutationResult = Apollo.MutationResult<MultipleUploadMutation>;
export type MultipleUploadMutationOptions = Apollo.BaseMutationOptions<MultipleUploadMutation, MultipleUploadMutationVariables>;
export const ListUserDocument = gql`
    query ListUser($paginate: PaginateInput, $query: String) {
  listUser(paginate: $paginate, query: $query) {
    docs {
      _id
      no
      active
      avatar
      firstName
      lastName
      email
      password
      role
      companyName
      companySize
      position
      ipAddress
      apiKey
      darkMode
      twoFactorAuthEnabled
      twoFactorRecoveryCodeCount
      createdAt
      updatedAt
    }
    totalDocs
    limit
    hasPrevPage
    hasNextPage
    page
    totalPages
    offset
    prevPage
    nextPage
    pagingCounter
    meta
  }
}
    `;

/**
 * __useListUserQuery__
 *
 * To run a query within a React component, call `useListUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUserQuery({
 *   variables: {
 *      paginate: // value for 'paginate'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListUserQuery(baseOptions?: Apollo.QueryHookOptions<ListUserQuery, ListUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options);
      }
export function useListUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUserQuery, ListUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options);
        }
export type ListUserQueryHookResult = ReturnType<typeof useListUserQuery>;
export type ListUserLazyQueryHookResult = ReturnType<typeof useListUserLazyQuery>;
export type ListUserQueryResult = Apollo.QueryResult<ListUserQuery, ListUserQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: ID!) {
  getUserById(_id: $id) {
    _id
    no
    active
    avatar
    firstName
    lastName
    email
    password
    role
    companyName
    companySize
    position
    ipAddress
    apiKey
    darkMode
    twoFactorAuthEnabled
    twoFactorRecoveryCodeCount
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    no
    active
    avatar
    firstName
    lastName
    email
    password
    role
    companyName
    companySize
    position
    ipAddress
    apiKey
    darkMode
    twoFactorAuthEnabled
    twoFactorRecoveryCodeCount
    createdAt
    updatedAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    _id
    no
    active
    avatar
    firstName
    lastName
    email
    password
    role
    companyName
    companySize
    position
    ipAddress
    apiKey
    darkMode
    twoFactorAuthEnabled
    twoFactorRecoveryCodeCount
    createdAt
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
    _id
    no
    active
    avatar
    firstName
    lastName
    email
    password
    role
    companyName
    companySize
    position
    ipAddress
    apiKey
    darkMode
    twoFactorAuthEnabled
    twoFactorRecoveryCodeCount
    createdAt
    updatedAt
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($signInInput: SignInInput!) {
  signIn(signInInput: $signInInput) {
    token
    user {
      _id
      no
      active
      avatar
      firstName
      lastName
      email
      password
      role
      companyName
      companySize
      position
      ipAddress
      apiKey
      darkMode
      twoFactorAuthEnabled
      twoFactorRecoveryCodeCount
      createdAt
      updatedAt
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      signInInput: // value for 'signInInput'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpClientDocument = gql`
    mutation SignUpClient($signUpClientInput: SignUpClientInput!) {
  signUpClient(signUpClientInput: $signUpClientInput) {
    token
    user {
      _id
      no
      active
      avatar
      firstName
      lastName
      email
      password
      role
      companyName
      companySize
      position
      ipAddress
      apiKey
      darkMode
      twoFactorAuthEnabled
      twoFactorRecoveryCodeCount
      createdAt
      updatedAt
    }
  }
}
    `;
export type SignUpClientMutationFn = Apollo.MutationFunction<SignUpClientMutation, SignUpClientMutationVariables>;

/**
 * __useSignUpClientMutation__
 *
 * To run a mutation, you first call `useSignUpClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpClientMutation, { data, loading, error }] = useSignUpClientMutation({
 *   variables: {
 *      signUpClientInput: // value for 'signUpClientInput'
 *   },
 * });
 */
export function useSignUpClientMutation(baseOptions?: Apollo.MutationHookOptions<SignUpClientMutation, SignUpClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpClientMutation, SignUpClientMutationVariables>(SignUpClientDocument, options);
      }
export type SignUpClientMutationHookResult = ReturnType<typeof useSignUpClientMutation>;
export type SignUpClientMutationResult = Apollo.MutationResult<SignUpClientMutation>;
export type SignUpClientMutationOptions = Apollo.BaseMutationOptions<SignUpClientMutation, SignUpClientMutationVariables>;
export const SignUpAdminDocument = gql`
    mutation SignUpAdmin($signUpAdminInput: SignUpAdminInput!) {
  signUpAdmin(signUpAdminInput: $signUpAdminInput) {
    token
    user {
      _id
      no
      active
      avatar
      firstName
      lastName
      email
      password
      role
      companyName
      companySize
      position
      ipAddress
      apiKey
      darkMode
      twoFactorAuthEnabled
      twoFactorRecoveryCodeCount
      createdAt
      updatedAt
    }
  }
}
    `;
export type SignUpAdminMutationFn = Apollo.MutationFunction<SignUpAdminMutation, SignUpAdminMutationVariables>;

/**
 * __useSignUpAdminMutation__
 *
 * To run a mutation, you first call `useSignUpAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpAdminMutation, { data, loading, error }] = useSignUpAdminMutation({
 *   variables: {
 *      signUpAdminInput: // value for 'signUpAdminInput'
 *   },
 * });
 */
export function useSignUpAdminMutation(baseOptions?: Apollo.MutationHookOptions<SignUpAdminMutation, SignUpAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpAdminMutation, SignUpAdminMutationVariables>(SignUpAdminDocument, options);
      }
export type SignUpAdminMutationHookResult = ReturnType<typeof useSignUpAdminMutation>;
export type SignUpAdminMutationResult = Apollo.MutationResult<SignUpAdminMutation>;
export type SignUpAdminMutationOptions = Apollo.BaseMutationOptions<SignUpAdminMutation, SignUpAdminMutationVariables>;