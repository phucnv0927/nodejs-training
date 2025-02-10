const User = require('../models/user.model');
const connectDB = require("../utils/database-nosql");

async function create(req, res) {
  try {
    const db = await connectDB();
    const { name, email, password } = req.body;

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email has already been existed" });
    }

    const newUser = new User(name, email, password);
    await User.create(db, newUser);

    res.status(201).json({ message: "Created", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const db = await connectDB();
    const users = await User.getAll(db, page);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { create, getAll };