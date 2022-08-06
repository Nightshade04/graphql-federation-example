const federation = require('@apollo/federation');
const apolloServer = require('apollo-server');
const typeDefs = require('./typedefs/typedefs'); 
const resolvers = require('./resolvers/resolver');
const mongoStore = require('./utils/mongoStore');

mongoStore();

const server = new apolloServer.ApolloServer({
  schema: federation.buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`User service ready at url: ${url}`);
});