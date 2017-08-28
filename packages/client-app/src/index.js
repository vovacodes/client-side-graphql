import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { schema, createLoaders, graphql, print } from '@wizardzloy/graphql-schema';

import App from './components/App';

const networkInterface = {
  query: (graphqlRequest) => {
    return graphql(
      schema,
      print(graphqlRequest.query),
      null,
      {
        loaders: createLoaders(),
      },
      graphqlRequest.variables,
      graphqlRequest.operationName,
    );
  },
};
const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
