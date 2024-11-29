const PrinterRepository = require('../repositories/printerRepository'); 

class PrinterUseCase {
  async addPrinter(name, location, status, remaining_page) {
    const existingPrinter = await PrinterRepository.findByName(name);
    if (existingPrinter) {
      throw new Error('Printer already exists');
    }
    const newPrinter = await PrinterRepository.create({ name, location, status, remaining_page });
    return newPrinter;
  }

  async deletePrinterByName(name) {
    const printer = await PrinterRepository.findByName(name);
    if (!printer) {
      throw new Error('Printer not found');
    }
    const result = await PrinterRepository.deleteByName(name);
    return result;
  }

  async getAllPrinters() {
    const printers = await PrinterRepository.findAll();
    return printers;
  }

  async getPrinterHistory(printerName) {
    const printer_history = await PrinterRepository.findHistoryByName(printerName);
    if (!printer_history) {
      throw new Error('Printer not found');
    }
    return printer_history;
  }

  async updatePrinter(name, updates) {
    const updatedPrinter = await PrinterRepository.updateOneByName(name, updates);
    if (!updatedPrinter) {
      throw new Error('Failed to update printer');
    }
    return updatedPrinter;
  }
}


module.exports = new PrinterUseCase();
