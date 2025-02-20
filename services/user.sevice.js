const { User } = require('../models');

const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

module.exports = {
  queryUsers
}