const mongoose = require('mongoose');
const printerSchema = new mongoose.Schema({
    name: String,
    location: String,
    status: {
        type: String, 
        required: true,
        default: "disable",
    },
    remaining_page: {
        type: Number,
        required: true,
        default: 100,
    }   
});
module.exports = mongoose.model('printerass', printerSchema,'printers');