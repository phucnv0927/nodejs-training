const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const userController = require('../controllers/user.controller');
const authService = require('../services/auth.service');

router.get('/products', authService.authenticateToken, productController.getProducts);
// router.get('/products/:id', ProductController.get);
router.post('/products/store', authService.authenticateToken, productController.createProduct);
// router.put('/products/:id/update', ProductController.update);
// router.delete('/products/:id/delete', ProductController.delete);

router.get('/users', authService.authenticateToken, userController.getUsers);
// router.post('/users/create', userController.create);

module.exports = router;