'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    /**
     * Helper method for finding user by email
     * @param {*} email
     * @returns {Promise<User>}
     */
    static async findByEmail(email) {
      return this.findOne({ where: { email } });
    }
    /**
     * Helper method for finding user by id
     * @param {*} id
     * @returns {Promise<User>}
     */
    static async findByPk(id) {
      return this.findByPk(id);
    }
    /**
     * Helper method for creating a user
     * @param {*} data
     * @returns {Promise<User>}
     */
    static async createUser(data) {
      return this.create(data);
    }
    /**
     * Helper method for updating a user
     * @param {*} id
     * @param {*} data
     * @returns {Promise<User>}
     */
    static async updateUser(id, data) {
      return this.update(data, { where: { id } });
    }
    /**
     * Helper method for deleting a user
     * @param {*} id
     * @returns {Promise<User>}
     */
    static async deleteUser(id) {
      return this.destroy({ where: { id } });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};