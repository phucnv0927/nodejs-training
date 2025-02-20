const express = require('express');
const router = express.Router();
// const ProductController = require('../controllers/product.controller');
const UserController = require('../controllers/user.controller');

// router.get('/products', ProductController.getAll);
// router.get('/products/:id', ProductController.get);
// router.post('/products/store', ProductController.store);
// router.put('/products/:id/update', ProductController.update);
// router.delete('/products/:id/delete', ProductController.delete);

router.get('/users', UserController.getUsers);
// router.post('/users/create', UserController.create);

module.exports = router;