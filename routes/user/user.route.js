const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user/user.controller');

router.route('/changepassword').post(userController.changePassword);
router.route('/logout').post(userController.logout);

module.exports = router;
