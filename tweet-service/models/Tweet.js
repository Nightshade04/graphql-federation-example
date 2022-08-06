const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Tweet = mongoose.model(
  'Tweet',
  TweetSchema
);

module.exports = Tweet
