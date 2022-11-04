import { gql } from 'apollo-server-micro';

export default gql`
  type Card {
    _id: ID!
    no:Int!
    id:String
    cardType:String
    last4:String
    expMonth:Int
    expYear:Int
    country:String
    createdAt: Date!
    updatedAt: Date!
  }

  type PaginateCard {
    docs: [Card]!
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

  input CreateCardInput {
    id:String
    cardType:String
    last4:String
    expMonth:Int
    expYear:Int
    country:String
  }

  input UpdateCardInput {
    _id:ID!
    id:String
    cardType:String
    last4:String
    expMonth:Int
    expYear:Int
    country:String
  }

  extend type Query {
    getCardById(_id: ID!): Card!
    listCard(paginate: PaginateInput, query: String): PaginateCard!
  }
  extend type Mutation {
    createCard(createCardInput: CreateCardInput!): Card!
    updateCard(updateCardInput: UpdateCardInput!): Card!
    deleteCard(_id: ID!): Card!
  }
`;
