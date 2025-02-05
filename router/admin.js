const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
router.get('/', (req, res) => {
  res.status(200).send('Admin page');
});

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.get);
router.post('/products/store', ProductController.store);
router.put('/products/:id/update', ProductController.update);
router.delete('/products/:id/delete', ProductController.delete);

module.exports = router;