const mongoose = require('mongoose');
const printHistorySchema = new mongoose.Schema({
    email: String,
    fileName: String,
    printerName: String,
    Location: String,
    pages: String,
    oddOrEven: String,
    copies: Number,
    sides: String,
    paperType: String,
    collation: String,
    orientation: String,
    paperSize: String,
    totalMoney: Number,
    datePrinting: String,
    Status: String,
});
module.exports = mongoose.model('printHistory', printHistorySchema,'printHistory');