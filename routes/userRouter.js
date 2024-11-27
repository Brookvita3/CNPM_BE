const express = require('express');
const route = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const userController = require('../controllers/userController');

// kiem tra dang nhap
route.use(authMiddleware);

// với cả 2 loại người dùng (user và admin)
route.route('/getinfo').get(userController.getinfo);

// với user bình thường
route.route('/user/logout').get(userController.logout);

// với admin
route.use(adminMiddleware);
route.route('/admin/add/user').post(userController.addUser);
route.route('/admin/delete/user/:email').delete(userController.deleteUser);

module.exports = route;
