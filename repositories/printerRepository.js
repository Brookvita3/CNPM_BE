const Printer = require('../models/print');
const PrinterHistory = require('../models/printHistory');

class PrinterRepository {
    async findByName(name) {
      return await Printer.findOne({name});
    }
    async create(data) {
      return await Printer.create(data);
    }
    async findAll() {
      return await Printer.find();
    }
    async deleteByName(name) {
      return await Printer.deleteOne({name});
    }
    async findHistoryByName(printerName) {
      return await PrinterHistory.findOne({printerName});
    }
    async updateOneByName(name, updates){
      return await Printer.findOneAndUpdate(
        { name },
        { $set: updates },
        { new: true } 
      );
    }
}
  
module.exports = new PrinterRepository();