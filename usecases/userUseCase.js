const UserRepository = require('../repositories/userRepository');
const UserMapper = require('../middleware/mapper/userMapper');

class userUseCases {
  async getinfo(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) throw new Error('Cant find user');
    return UserMapper.toResponse(user);
  }

  async updateInfo(username, email, password, years, pages) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error('Cant find user');
    user.username = username;
    user.email = email;
    user.password = password;
    user.years = years;
    user.pages = pages;
    await user.save();
    return user;
  }
}

module.exports = new userUseCases();
