import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import Movie from './Movie';


const Actor = new GraphQLObjectType({
  name: 'Actor',
  description: 'A person acting in movies',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the actor, unique amongst all actors',
    },
    name: {
      type: GraphQLString,
      description: 'Name of the actor',
    },
    movies: {
      type: new GraphQLList(Movie),
      description: 'List of the movies the actor is acting in'
    }
  })
});


export default Actor;
