'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Courses', [
      {
        course_name: 'Introduction to JavaScript',
        course_description: 'Learn the basics of JavaScript.',
        course_price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Advanced JavaScript',
        course_description: 'Deep dive into JavaScript advanced concepts.',
        course_price: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Node.js for Beginners',
        course_description: 'Learn how to build applications using Node.js.',
        course_price: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'React.js Fundamentals',
        course_description: 'Get started with React.js development.',
        course_price: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Vue.js Essentials',
        course_description: 'Learn the essentials of Vue.js framework.',
        course_price: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Database Design',
        course_description: 'Learn how to design relational databases effectively.',
        course_price: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'REST API Development',
        course_description: 'Build RESTful APIs using Express.js and Node.js.',
        course_price: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'GraphQL Basics',
        course_description: 'Understand GraphQL and how to use it in applications.',
        course_price: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Docker for Developers',
        course_description: 'Learn how to containerize applications using Docker.',
        course_price: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: 'Kubernetes Essentials',
        course_description: 'Get started with Kubernetes for container orchestration.',
        course_price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
