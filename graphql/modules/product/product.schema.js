const { gql } = require('graphql-tag');

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    user: User
  }

  extend type Query {
    getProducts: [Product]
  }

  extend type Mutation {
    createProduct(name: String!, price: Float!): Product
  }
`;
