import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import Actor from './Actor';


const Movie = new GraphQLObjectType({
  name: 'Movie',
  description: 'A motion picture',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the movie, unique amongst all movies',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the movie',
    },
    actors: {
      type: new GraphQLList(Actor),
      description: 'List of the actors acting in the movie'
    }
  })
});


export default Movie;
