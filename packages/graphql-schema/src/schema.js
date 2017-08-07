import 'isomorphic-fetch';
import { GraphQLSchema } from 'graphql';
import Query from './types/Query';


const schema = new GraphQLSchema({
  query: Query
});


export default schema;
