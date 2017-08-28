import { graphql, print } from 'graphql';
import schema from './schema';
import createLoaders from './loaders/createLoaders';

export {
  schema,
  createLoaders,
  // export graphql to avoid "two instances of graphql" error
  // when npm linking schema to the client during development
  graphql,
  print,
}
