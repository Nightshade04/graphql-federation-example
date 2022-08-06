const Tweet = require('../models/Tweet');

const resolver = {
    Query: {
        tweet: async (_, { id }) => {
            const currentTweet = await Tweet.findOne({ _id: id });
            return currentTweet;
        },
        tweets: async () => {
            const tweetsList = await Tweet.find({});
            return tweetsList;
        },
    },
    Tweet: {
        creator: (tweet) => ({ __typename: 'User', id: tweet.userId }),
    },
    User: {
        tweets: async (user) => {
            const tweetsByUser = await Tweet.find({ userId: user.id });
            return tweetsByUser;
        },
    },
    Mutation: {
        createTweet: async (_, { tweetPayload: { text, userId } }) => {
            const newTweet = new Tweet({ text, userId });
            const createdTweet = await newTweet.save();
            return createdTweet;
        },
    },
};

module.exports = resolver
