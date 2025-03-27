const bcrypt = require('bcryptjs');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const register = async (req, res) => {
  const createdUser = await User.create(req.body);

  return res.status(201).send({ user: createdUser, message: 'Registered successfully !' });
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.scope('withPassword').findByEmail(email);
  if (!user) {
    return res.status(400).send({ message: 'Email or password is incorrect' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ message: 'Email or password is incorrect' });
  }
  const expiresAt = moment().add(process.env.JWT_EXPIRES_IN, "minutes").unix();
  const accessToken = jwt.sign({ id: user.id, email: user.email, exp: expiresAt }, process.env.JWT_SECRET);

  const data = {
    user: { ...user.get(), password: undefined },
    access_token: accessToken,
  }
  return res.status(200).send(data);
}

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthenticate.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthenticate.' });
    req.user = user;
    next();
  });
};

module.exports = {
  register,
  login,
  authenticateToken,
}