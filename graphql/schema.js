const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type User {
    id: ID!
    firstName: String,
    lastName: String,
    email: String!,
    password: String!
    products: [Product]
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User
  }
`);
