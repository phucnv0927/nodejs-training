'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Course, {
        foreignKey: 'courseId',
      });
    }
  }
  Users_Course.init({
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users_Course',
    timestamps: false
  });
  return Users_Course;
};