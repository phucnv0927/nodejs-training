const mongoose = require('mongoose');
const path = require('path');
const rootDir = require('../utils/path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(rootDir, '.env')});

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error('Error connection:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

