import createMovieLoaders from './createMovieLoaders';
import createActorLoaders from './createActorLoaders';


const createLoaders = () => ({
  ...createMovieLoaders(),
  ...createActorLoaders(),
});


export default createLoaders;
