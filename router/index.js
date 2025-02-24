const express = require('express');
const adminRoute = require('./admin.router');
const shopRoute = require('./shop.router');
const authRoute = require('./auth.router');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: shopRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;