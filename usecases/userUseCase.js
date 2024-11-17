const UserRepository = require('../repositories/userRepository');
const UserMapper = require('../middleware/mapper/userMapper');
const UserSchema = require('../models/users');

class userUseCases {
  async getinfo(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error('Cant find user');
    return UserMapper.toResponse(user);
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error('Cant find user');

    // Check old password
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) throw new Error('Invalid password');

    user.password = newPassword;
    await user.save();
    return user;
  }
}

module.exports = new userUseCases();
