const { ApolloServer, AuthenticationError } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      throw new AuthenticationError('You must be logged in');
    }

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return { user };
    } catch (err) {
      return null;
    }
  },
  formatError: (err) => ({
    message: err.message,
    code: err.extensions?.code || "INTERNAL_SERVER_ERROR",
  }),
});

module.exports = apolloServer;