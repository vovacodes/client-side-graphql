// @flow
export type ActorObject = {
  id: number,
  name: string,
  movies: Array<number>,
};

export type MovieObject = {
  id: number,
  title: string,
  actors: Array<number>,
};
