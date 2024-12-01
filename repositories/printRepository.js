const Print = require('../models/print');

class PrintRepository {
  async findByName(name) {
    return await Print.findOne({ name });
  }
  async create(data) {
    return await Print.create(data);
  }
  async findAll() {
    return await Print.find();
  }
  async deleteByName(name) {
    return await Print.deleteOne({ name });
  }
}

module.exports = new PrintRepository();