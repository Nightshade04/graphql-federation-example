const { gql } = require('apollo-server')

const typeDefs = gql`
    type User @key(fields: "id") {
        id: ID!
        username: String!
    }
    extend type Query {
        users: [User]
        user(id: ID!): User
    }
    extend type Mutation {
        createUser(userPayload: UserPayload): User
    }
    input UserPayload {
        username: String!
    }
`;

module.exports = typeDefs
