const express = require('express');
const route = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');

const userController = require('../controllers/userController');

route.use(authMiddleware);
route.route('/getinfo').get(userController.getinfo);
route.route('/logout').get(userController.logout);

module.exports = route;
