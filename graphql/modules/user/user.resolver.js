const { User, Product } = require('../../../models');
const { userService } = require('../../../services');
const { AuthenticationError } = require('apollo-server-errors');

const userResolvers = {
  Query: {
    getUsers: async (_, args, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in');
      }
      const filter = { name: args.name, email: args.email };
      const options = { sortBy: args.sortBy, limit: args.limit, page: args.page };
      const result = await userService.queryUsers(filter, options);
      return {
        data: result.data,
        meta: {
          total: result.totalRecords,
          limit: result.limit,
          page: result.page,
        },
      };
    },
  },
  Mutation: {
    createUser: async (_, { firstName, lastName, email, password }) => {
      return await User.create({ firstName, lastName, email, password });
    },
  }
};

module.exports = userResolvers;
