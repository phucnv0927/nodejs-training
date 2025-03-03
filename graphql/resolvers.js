const userResolvers = require('./modules/user/user.resolver');
const productResolvers = require('./modules/product/product.resolver');

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
  },
};

