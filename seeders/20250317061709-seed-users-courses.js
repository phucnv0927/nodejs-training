'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM Users;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const courses = await queryInterface.sequelize.query(
      'SELECT id FROM Courses;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    let userCourses = [];
    users.forEach(user => {
      let assignedCourses = courses
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1);

      assignedCourses.forEach(course => {
        userCourses.push({
          userId: user.id,
          courseId: course.id,
        });
      });
    });

    return queryInterface.bulkInsert('Users_Courses', userCourses);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users_Courses', null, {});
  }
};
