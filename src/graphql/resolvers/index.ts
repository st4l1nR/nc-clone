// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { GraphQLScalarType, Kind } from 'graphql';
import { imageMutations } from './image';
import { userQueries, userMutations } from './user';
import { organizationQueries, organizationMutations } from './organization';
import { planQueries, planMutations } from './plan';
import { cardQueries, cardMutations } from './card';
import { variableQueries, variableMutations } from './variable';
import { folderQueries, folderMutations } from './folder';
import { suiteQueries, suiteMutations } from './suite';
import { testQueries, testMutations } from './test';
import { commentQueries, commentMutations } from './comment';
import { memberQueries, memberMutations } from './member';

export default {
  Upload: GraphQLUpload,
  Object: new GraphQLScalarType({
    name: 'Object',
    description: 'Arbitrary object',
    parseValue: (value) => {
      return typeof value === 'object' ? value : typeof value === 'string' ? JSON.parse(value) : null;
    },
    serialize: (value) => {
      return typeof value === 'object' ? value : typeof value === 'string' ? JSON.parse(value) : null;
    },
    parseLiteral: (ast) => {
      switch (ast.kind) {
        case Kind.STRING:
          return JSON.parse(ast.value);
        case Kind.OBJECT:
          throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
        default:
          return null;
      }
    },
  }),
  Query: {
    ...userQueries,
    ...organizationQueries,
    ...planQueries,
    ...cardQueries,
    ...variableQueries,
    ...folderQueries,
    ...suiteQueries,
    ...testQueries,
    ...commentQueries,
    ...memberQueries,
  },
  Mutation: {
    ...imageMutations,
    ...userMutations,
    ...organizationMutations,
    ...planMutations,
    ...cardMutations,
    ...variableMutations,
    ...folderMutations,
    ...suiteMutations,
    ...testMutations,
    ...commentMutations,
    ...memberMutations,
  },
};
