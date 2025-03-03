const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    products: [Product]
  }

  extend type Query {
    getUsers: [User]
  }

  extend type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User
  }
`;
