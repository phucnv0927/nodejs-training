const { User, Product } = require('../../../models');
const { userService } = require('../../../services');

const userResolvers = {
  Query: {
    getUsers: async (_, args) => {
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
