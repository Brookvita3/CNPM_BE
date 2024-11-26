const mongoose = require('mongoose');
const printHistorySchema = new mongoose.Schema({
    email: String,
    fileName: String,
    printerName: String,
    Location: String,
    pages: String,
    copies: Number,
    datePrinting: String,
    Status: String,
});
module.exports = mongoose.model('printHistory', printHistorySchema,'printHistory');