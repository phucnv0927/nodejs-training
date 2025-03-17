const { Course } = require('../../../models');

const courseResolvers = {
  Query: {
    async getCourses() {
      return await Course.findAll({
        include: { model: User, as: 'users' }
      });
    },
  },
  Mutation: {
    async createCourse(_, { course_name, course_description, course_price }) {
      return await Course.create({ course_name, course_description, course_price });
    },
  }
};

module.exports = courseResolvers;
