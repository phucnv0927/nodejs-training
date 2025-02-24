const userService = require('../services/user.sevice');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'email']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const users = await userService.queryUsers(filter, options);
  return res.status(200).send(users);
});

module.exports = { getUsers };