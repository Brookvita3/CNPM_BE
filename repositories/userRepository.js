const User = require('../models/users');
const mongoose = require('mongoose');

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid ID format');
    }
    return await User.findById(userId);
  }

  async findByRefreshToken(refreshToken) {
    return await User.findOne({ refreshToken });
  }
  //xoa theo email
  async deleteByEmail(userEmail) {
    if (!mongoose.Types.ObjectId.isValid(userEmail)) {
      throw new Error('Invalid ID format');
    }
    return await User.findByEmailAndDelete(userEmail);
  }
}

module.exports = new UserRepository();
