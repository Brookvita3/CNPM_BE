const express = require('express');
const route = express.Router();
const authController = require('../../controllers/auth/auth.controller');
const authMiddleware = require('../../middleware/auth/login.middleware');

route.route('/login').post(authController.login);
route
  .route('/token')
  .post(authMiddleware.loginMiddleware, authController.refreshToken);
route
  .route('/logout')
  .post(authMiddleware.loginMiddleware, authController.logout);

module.exports = route;
