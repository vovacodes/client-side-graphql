// @flow
import config from '../config';
import type DataLoader from 'dataloader';
import type { ActorObject } from '../flowTypes/apiTypes';


const getAllActors = (): Promise<Array<ActorObject>> => fetch(`${config.restBackendUrl}/actors`)
  .then(response => response.json());

const getActorById = (
  actorByIdLoader: DataLoader<number, ActorObject>,
  id: number
): Promise<ActorObject> => actorByIdLoader.load(id);

const getActorsByIds = (
  actorByIdLoader: DataLoader<number, ActorObject>,
  ids: Array<number>
): Promise<Array<ActorObject>> => actorByIdLoader.loadMany(ids);


export {
  getAllActors,
  getActorById,
  getActorsByIds,
}
