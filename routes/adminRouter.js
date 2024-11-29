const express = require('express');
const router = express.Router();

const adminMiddleware = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

//router.use(adminMiddleware);

router.route('/add/user').post(adminController.addUser);
router.route('/add/printer').post(adminController.addPrinter);
router.route('/delete/printer').delete(adminController.deletePrinter);
router.route('/get/printers').get(adminController.getAllPrinters);
router.route('/get/printer_history').get(adminController.getPrinterHistory);
router.route('/get/printer_history_by_name').get(adminController.getPrinterHistoryByName);
router.route('/change/printer').patch(adminController.changePrinter);
router.route('/printers/index').get(adminController.getindexPage);
router.route('/add_printers/index').get(adminController.getAddPrinters);
router.route('/logout').get(adminController.logout);
router.route('/delete/user').delete(adminController.deleteUser);

module.exports = router;
