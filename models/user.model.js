// const { DataTypes } = require('sequelize');

// const sequelize = require('../utils/database');

// const User = sequelize.define('user', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: DataTypes.STRING,
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
// });

// module.exports = User;

const bcrypt = require('bcryptjs');
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  static async create(db, userData) {
    try {
      userData.password = await this.hashPassword(userData.password);
      const collection = db.collection("users");
      const result = await collection.insertOne(userData);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAll(db, page) {
    try {
      const limit = 10;
      const skip = (page - 1) * limit;
      const collection = db.collection("users");
      const users = await collection
        .find({}, { projection: { password: 0 } })
        .skip(skip)
        .limit(limit)
        .toArray();
      const totalUsers = await collection.countDocuments();
      const totalPages = Math.ceil(totalUsers / limit);

      return { users, totalUsers, totalPages, currentPage: page };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = User;
