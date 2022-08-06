const { gql } = require('apollo-server')

const typeDefs = gql`
    type Tweet {
        text: String
        id: ID!
        creator: User
    }
    extend type User @key(fields: "id") {
        id: ID! @external
        tweets: [Tweet]
    }
    extend type Query {
        tweet(id: ID!): Tweet
        tweets: [Tweet]
    }
    extend type Mutation {
        createTweet(tweetPayload: TweetPayload): Tweet
    }
    input TweetPayload {
        userId: String
        text: String
    }
`;

module.exports = typeDefs
