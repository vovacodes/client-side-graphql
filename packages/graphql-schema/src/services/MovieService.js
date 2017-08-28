// @flow
import config from '../config';
import type DataLoader from 'dataloader';
import type { MovieObject } from '../flowTypes/apiTypes';

const getAllMovies = (): Promise<Array<MovieObject>> => fetch(`${config.restBackendUrl}/movies`)
  .then(response => response.json());

const getMovieById = (
  movieByIdLoader: DataLoader<number, MovieObject>,
  id: number
): Promise<MovieObject> => movieByIdLoader.load(id);

const getMoviesByIds = (
  movieByIdLoader: DataLoader<number, MovieObject>,
  ids: Array<number>
): Promise<Array<MovieObject>> => movieByIdLoader.loadMany(ids);


export {
  getAllMovies,
  getMovieById,
  getMoviesByIds,
};