'use strict';

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema }            = require('graphql-tools');

const { typeDefs }  = require('./schema');
const { resolvers } = require('./resolvers');

const User   = require('../db/models/User');
const Recipe = require('../db/models/Recipe');

// Create schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = (app, bodyParser) => {
  // Create Graphql application
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  // Connect schemas with Graphql
  app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {
      User,
      Recipe,
    },
  }));
};
