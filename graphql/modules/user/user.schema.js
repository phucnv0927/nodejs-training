const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    products: [Product]
  }

  type Meta {
    total: Int
    limit: Int
    page: Int
  }

  type UserPagination {
    data: [User]
    meta: Meta
  }

  extend type Query {
    getUsers(name: String, email: String, sortBy: String, limit: Int, page: Int): UserPagination
  }

  extend type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User
  }
`;
