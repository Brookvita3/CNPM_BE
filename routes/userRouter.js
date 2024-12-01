const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const userMiddleware = require('../middlerware/userMiddleware');

// for render
router.get('/info', userController.getInfo);
router.post('/check/password', userController.checkPassword);
router.get('/logout', userController.logout);

// for fetch
router.get('/get/info', userController.fetchInfo);

module.exports = router