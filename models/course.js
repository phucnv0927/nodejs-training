'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: 'Users_Courses',
        foreignKey: 'courseId',
        timestamps: false
      });
    }
  }
  Course.init({
    course_name: DataTypes.STRING,
    course_description: DataTypes.STRING,
    course_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};