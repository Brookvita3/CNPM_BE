const express = require('express');
const router = express.Router();

const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

//router.use(adminMiddleware);
router.route('/add/printer').post(adminController.addPrinter);
router.route('/delete/printer').delete(adminController.deletePrinter);

module.exports = router;
