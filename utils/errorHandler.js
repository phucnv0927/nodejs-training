const { Sequelize } = require('sequelize');

const errorHandler = (err, req, res, next) => {
  if (err instanceof Sequelize.UniqueConstraintError) {
    return res.status(400).json({ errors: ['Email already exists!'] });
  }

  if (err instanceof Sequelize.ValidationError) {
    const messages = err.errors.map(e => e.message);
    return res.status(400).json({ errors: messages });
  }

  res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorHandler;

