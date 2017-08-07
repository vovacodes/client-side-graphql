import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID, GraphQLList } from 'graphql';
import Actor from './Actor';
import { getActorsByIds } from '../services/ActorService';


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
    storyline: {
      type: GraphQLString,
      description: 'Synopsis of the movie',
    },
    year: {
      type: GraphQLString,
      description: 'The year of release',
    },
    imdbRating: {
      type: GraphQLFloat,
      description: 'The year of issue',
    },
    posterUrl: {
      type: GraphQLString,
      description: "URL of the poster of the movie"
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      description: 'Genres of the movie',
    },
    actors: {
      type: new GraphQLList(Actor),
      description: 'List of the actors acting in the movie',
      resolve: (movie, args, { loaders: { actorByIdLoader } }) => getActorsByIds(actorByIdLoader, movie.actors)
    }
  })
});


export default Movie;
