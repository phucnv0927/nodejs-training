const { Product } = require('../models');
const { Op } = require('sequelize');
const paginate = require('../utils/paginate');

const getProducts = async (filter, options) => {
  return await paginate(Product, filter, options);;
};

const createProduct = async (user, data) => {
  return await Product.create({ ...data, userId: user.id });
}

module.exports = {
  getProducts,
  createProduct
}