// @flow
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import Movie from './Movie';
import Actor from './Actor';
import { getAllMovies, getMovieById } from '../services/MovieService';
import { getAllActors, getActorById } from '../services/ActorService';


const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query type',
  fields: () => ({
    movies: {
      type: new GraphQLList(Movie),
      description: 'List of all available movies',
      resolve: () => getAllMovies()
    },
    movieById: {
      type: Movie,
      description: 'Movie by id',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'ID of the Movie to find'
        }
      },
      resolve: (root, { id }, { loaders }) => getMovieById(loaders.movieByIdLoader, id),
    },
    actors: {
      type: new GraphQLList(Actor),
      description: 'List of all available actors',
      resolve: () => getAllActors()
    },
    actorById: {
      type: Actor,
      description: 'Actor by id',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'ID of the Actor to find'
        }
      },
      resolve: (root, { id }, { loaders }) => getActorById(loaders.actorByIdLoader, id),
    },
  })
});


export default Query;
