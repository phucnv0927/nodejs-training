const userService = require('../services/user.sevice');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'email']);
  if (filter.name) {
    filter.name = { $regex: filter.name, $options: 'i' };
  }
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

module.exports = { getUsers };