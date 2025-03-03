const { gql } = require('graphql-tag');
const userSchema = require('./modules/user/user.schema');
const productSchema = require('./modules/product/product.schema');

const rootSchema = gql`
  type Query
  type Mutation
`;

module.exports = [
  rootSchema,
  userSchema,
  productSchema
];
