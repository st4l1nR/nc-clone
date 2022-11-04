import { gql } from 'apollo-server-micro';

export default gql`
  enum UserRole {
    client
    admin
  }

  type User {
    _id: ID!
    no: Int!
    active: Boolean!
    avatar: String
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: UserRole!
    companyName: String
    companySize: Int
    position: String
    ipAddress: String
    apiKey: String
    darkMode: Boolean
    twoFactorAuthEnabled: Boolean
    twoFactorRecoveryCodeCount: Int
    createdAt: Date!
    updatedAt: Date!
  }

  type Session {
    token: String!
    user: User!
  }

  type Message {
    message:String
  }

  type PaginateUser {
    docs: [User]!
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

  input PaginateInput {
    limit: Int
    offset: Int
    sort: Object
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    email: String
    companyName: String
    companySize: Int
    password: String
    role: UserRole
  }

  input UpdateUserInput {
    _id: ID!
    active: Boolean
    avatar: String
    firstName: String
    lastName: String
    email: String
    password: String
    role: UserRole
    companyName: String
    companySize: Int
    position: String
    ipAddress: String
    apiKey: String
    darkMode: Boolean
    twoFactorAuthEnabled: Boolean
    twoFactorRecoveryCodeCount: Int
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpClientInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    companyName: String!
    companySize: Int!
    position: String!
    ipAddress: String!
  }

  input SignUpAdminInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input VerifyUserInput {
    userId: ID!
    token: String!
  }

  extend type Query {
    listUser(paginate: PaginateInput, query: String): PaginateUser!
    getUserById(_id: ID!): User!
  }

  extend type Mutation {
    createUser(createUserInput: CreateUserInput!): User!
    updateUser(updateUserInput: UpdateUserInput!): User!
    deleteUser(_id: ID!): User!
    signIn(signInInput: SignInInput!): Session!
    signUpClient(signUpClientInput: SignUpClientInput!): Session!
    signUpAdmin(signUpAdminInput: SignUpAdminInput!): Session!
    verifyUser(verifyUserInput: VerifyUserInput!): Message!
    }
`;
