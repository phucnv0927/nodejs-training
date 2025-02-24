const { User } = require('../models');
const { Op } = require('sequelize');
const paginate = require('../utils/paginate');

const queryUsers = async (filter, options) => {
  if (filter.name) {
    filter[Op.or] = [
      { firstName: { [Op.like]: `%${filter.name}%` } },
      { lastName: { [Op.like]: `%${filter.name}%` } }
    ];
    delete filter.name;
  }
  return await paginate(User, filter, options);;
};

module.exports = {
  queryUsers
}