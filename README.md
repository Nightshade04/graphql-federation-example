# graphql-federation-example
An example for GraphQl Federation

To run, follow these steps:
    1. Navigate inside a subfolder (user-service)
    2. Open a cmd/bash here
    3. Do a npm install here
    4. After step 3 completes, run 'npm start' to start the service

  Repeat above 4 steps for other two services as well.

When everything finshes, you can query the complete Service at http://localhost:4000/

If you wish to query the individual graph for the two services (user-service, tweet-service), check your console logs to find the server urls there.

Enjoy! 

# IMPORTANT : 
    Your local mongoDB should be up and running, or else, starting the server will throw errors.

# Query and Mutation Examples: 

mutation{
  createUser(userPayload: {
    username: "Tony Stark"
  }) {
    id
    username
  }
}

mutation{
  createUser(userPayload: {
    username: "Steve Rogers"
  }) {
    id
    username
  }
}

mutation{
  createTweet(tweetPayload: {
    text: "I am a billionaire, philanthropist and a playboy.",
    userId: "--User ID for a particular user from mongo goes here--"
  }) {
    id
    text
    creator {
      username
    }
  }
}

mutation{
  createTweet(tweetPayload: {
    text: "I am Captain-America",
    userId: "--User ID for a particular user from mongo goes here--"
  }) {
    id
    text
    creator {
      username
    }
  }
}

query{
  tweets {
    text
    creator {
      username
    }
  }
}

query{
  users {
    username
    tweets {
      text
    }
  }
}
