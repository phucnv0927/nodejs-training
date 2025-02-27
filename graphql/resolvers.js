const { User, Product } = require('../models');

const resolvers = {
  async getUsers() {
    return await User.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });
  },
  async createUser(obj, _) {
    try {
      const user = await User.create(obj);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = resolvers;
