const { User, Product } = require('../models');
const { Op } = require('sequelize');
const paginate = require('../utils/paginate');

const queryUsers = async (filter, options) => {
  const whereCondition = {
    ...(filter.name && {
      [Op.or]: [
        { firstName: { [Op.like]: `%${filter.name}%` } },
        { lastName: { [Op.like]: `%${filter.name}%` } }
      ]
    }),
    ...(filter.email && { email: { [Op.like]: `%${filter.email}%` } })
  };

  return await paginate(User, whereCondition, {
    ...options,
    attributes: ['id', 'firstName', 'lastName', 'email'],
    include: [
      {
        model: Product,
        as: 'products',
        attributes: ['id', 'name', 'price'],
        required: false,
        where: { name: { [Op.like]: '%Milk%' } },
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['email'],
          },
        ],
      },
    ],
  });;
};

module.exports = {
  queryUsers
}