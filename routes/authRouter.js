const express = require('express');
const route = express.Router();

const userController = require('../controllers/userController');

route.route('/').post(userController.login);
route.route('/token').post(userController.refreshToken);

// nay chi de them data de test, ve ban chat data phai co san trong db roi
route.route('/register').post(userController.register);

module.exports = route;
