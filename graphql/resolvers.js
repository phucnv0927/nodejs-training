const userResolvers = require('./modules/user/user.resolver');
const productResolvers = require('./modules/product/product.resolver');
const courseResolvers = require('./modules/course/course.resolver');

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...courseResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
    ...courseResolvers.Mutation,
  },
};

