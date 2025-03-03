const { User, Product } = require('../../../models');

const userResolvers = {
  Query: {
    async getUsers() {
      return await User.findAll({
        include: { model: Product, as: 'products' }
      });
    },
  },
  Mutation: {
    async createUser(_, { firstName, lastName, email }) {
      return await User.create({ firstName, lastName, email });
    },
  }
};

module.exports = userResolvers;
