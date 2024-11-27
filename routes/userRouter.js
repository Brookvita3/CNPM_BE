const express = require('express');
const route = express.Router();

const userMiddleware = require('../middleware/userMiddleware');

const userController = require('../controllers/userController');

// kiem tra dang nhap
route.use(userMiddleware);
route.route('/getinfo').get(userController.getinfo);

// với user bình thường
route.route('/user/logout').get(userController.logout);

// với admin
route.use(adminMiddleware);
route.route('/admin/add/user').post(userController.addUser);
route.route('/admin/delete/user/:email').delete(userController.deleteUser);

module.exports = route;
