require('dotenv').config();
const catchAsync = require('../utils/catchAsync');
const { authService } = require('../services');

const register = catchAsync(async (req, res) => {
  await authService.register(req, res);
});

const login = catchAsync(async (req, res) => {
  await authService.login(req, res);
});

module.exports = {
  register,
  login,
}
