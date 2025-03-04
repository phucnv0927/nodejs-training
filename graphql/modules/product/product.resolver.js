const { User, Product } = require('../../../models');

const productResolvers = {
  Query: {
    async getProducts() {
      return await Product.findAll({
        include: { model: User, as: 'user' }
      });
    },
  },
  Mutation: {
    async createProduct(_, { name, price }) {
      return await Product.create({ name, price });
    },
  }
};

module.exports = productResolvers;
