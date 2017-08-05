const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { schema } = require('@wzrdzl/graphql-schema');

const app = express();

// accepts GraphQL queries
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// runs GraphiQL web app
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(4000, () => {
  console.log('You can send your GraphQL queries with either POST or GET to the http://localhost:4000/graphql');
  console.log('You can access the GraphiQL UI on http://localhost:4000/graphiql');
});
