const apolloServer = require('apollo-server');
const apolloGateway = require('@apollo/gateway');

const gateway = new apolloGateway.ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4001' },
    { name: 'tweets', url: 'http://localhost:4002' },
  ],
});

const server = new apolloServer.ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => {
  console.log(`Server ready at url: ${url}`);
});
