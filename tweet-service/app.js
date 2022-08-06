const federation = require('@apollo/federation');
const apolloServer = require('apollo-server');
const typeDefs = require('./typedefs/typedefs'); 
const resolvers = require('./resolvers/resolver');
const mongoStore = require('./utils/mongoStore');

mongoStore();

const server = new apolloServer.ApolloServer({
  schema: federation.buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`Tweet service ready at url: ${url}`);
});