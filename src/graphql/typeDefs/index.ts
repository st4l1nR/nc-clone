import { gql } from 'apollo-server-micro';
import image from './image';
import user from './user';
import organization from './organization';
import plan from './plan';
import card from './card';
import variable from './variable';
import folder from './folder';
import suite from './suite';
import test from './test';
import comment from './comment';
import member from './member';

const link = gql`
  scalar Upload
  scalar Date
  scalar Object
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [link, image, user, organization, plan, card, variable, folder, suite, test, comment, member];
