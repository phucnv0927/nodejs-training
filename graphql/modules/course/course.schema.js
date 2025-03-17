const { gql } = require('graphql-tag');

module.exports = gql`
  type Course {
    id: ID!
    course_name: String!,
    course_description: String!,
    course_price: Float!
  }

  extend type Query {
    getCourses: [Course]
  }

  extend type Mutation {
    createCourse(course_name: String!, course_description: String!, course_price: Float!): Course
  }
`;
