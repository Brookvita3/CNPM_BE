const express = require('express');
const adminMiddleware = require('../middlerware/adminMiddleware');
const router = express.Router();

const adminController = require('../controller/adminController.js');

router.post('/add/users', adminController.addUser);
router.get('/add_printers/index', adminMiddleware, adminController.getAddPrinters);
router.post('/add/printer', adminController.addPrinter);

// router.route('/delete/printer').delete(adminController.deletePrinter);
// router.route('/get/printers').get(adminController.getAllPrinters);
// router.route('/get/printer_history').get(adminController.getPrinterHistory);
// router.route('/get/printer_history_by_name').get(adminController.getPrinterHistoryByName);

// router.route('/printers/index').get(adminController.getindexPage);

// router.route('/logout').get(adminController.logout);
// router.route('/delete/user').delete(adminController.deleteUser);

module.exports = router;