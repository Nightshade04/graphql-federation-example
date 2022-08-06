const User = require('../models/User');

const resolver = {
    Query: {
        users: async () => {
            const allUsers = await User.find({});
            return allUsers;
        },
        user: async (_, { id }) => {
            const currentUser = await User.findOne({ _id: id });
            return currentUser;
        },
    },
    User: {
        __resolveReference: async (ref) => {
            const currentUser = await User.findOne({ _id: ref.id });
            return currentUser;
        },
    },
    Mutation: {
        createUser: async (_, { userPayload: { username } }) => {
            const user = new User({ username });
            const createdUser = await user.save();
            return createdUser;
        },
    },
};

module.exports = resolver
