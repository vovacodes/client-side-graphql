import { GraphQLObjectType, GraphQLList } from 'graphql';
import Movie from './Movie';
import Actor from './Actor';


const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query type',
  fields: () => ({
    movies: {
      type: new GraphQLList(Movie),
      description: 'List of all available movies'
    },
    actors: {
      type: new GraphQLList(Actor),
      description: 'List of all available actors'
    }
  })
});


export default Query;
