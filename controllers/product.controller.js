const productService = require('../services/product.service');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const products = await productService.getProducts(filter, options);
  return res.status(200).send(products);
})

const createProduct = catchAsync(async (req, res) => {
  const user = req.user;
  const data = req.body;
  const product = await productService.createProduct(user, data);
  return res.status(200).send(product);
});

module.exports = {
  getProducts,
  createProduct
};