const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { schema, createLoaders } = require('./dist/index');

const app = express();

// enable CORS
app.use(cors());

// accepts GraphQL queries
app.use('/graphql', bodyParser.json(), graphqlExpress(() => ({
  schema,
  context: {
    // create new loaders on every request
    // https://github.com/facebook/dataloader#caching-per-request
    loaders: createLoaders()
  }
})));

// runs GraphiQL web app
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(4000, () => {
  console.log('You can send your GraphQL queries with either POST or GET to the http://localhost:4000/graphql');
  console.log('You can access the GraphiQL UI on http://localhost:4000/graphiql');
});
