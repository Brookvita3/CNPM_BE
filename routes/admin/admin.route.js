const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/admin/admin.controller');

router.route('/add/user').post(adminController.addUser);

module.exports = router;
