const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs-training', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
