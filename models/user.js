'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: 'userId',
        as: 'products'
      })
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 10],
          msg: 'Password must be at least 8 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      afterValidate: async (user) => {
        const salt = await bcrypt.genSalt(8);
        user.password = await bcrypt.hash(user.password, salt);
      },
    }
  });
  return User;
};