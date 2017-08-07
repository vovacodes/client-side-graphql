// @flow
import DataLoader from 'dataloader';


const createActorByIdLoader = () => new DataLoader(
  (actorIds) => fetch('http://localhost:3000/actors/by-ids', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ids: actorIds,
    }),
  }).then(response => response.json())
);

const createActorLoaders = () => ({
  actorByIdLoader: createActorByIdLoader(),
});


export default createActorLoaders;
