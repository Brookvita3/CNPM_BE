const express = require('express');
const router = express.Router();

const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

router.use(adminMiddleware);

router.route('/add/user').post(adminController.addUser);
router.route('/add/printer').post(adminController.addPrinter);
router.route('/delete/printer').delete(adminController.deletePrinter);
router.route('/logout').get(adminController.logout);

module.exports = router;
