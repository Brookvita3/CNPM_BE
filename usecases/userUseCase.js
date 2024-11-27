const UserRepository = require('../repositories/userRepository');
const UserMapper = require('../middleware/mapper/userMapper');

class userUseCases {
  //delete user
  async deleteUser(adminEmail, userEmail) {
    const admin = await UserRepository.findByEmail(adminEmail);
    if (!admin || admin.role !== 'ADMIN') {
        throw new Error('Unauthorized: Only admins can delete users.');
    }

    const user = await UserRepository.findByEmail(userEmail);
    if (!user) throw new Error('User not found');

    return await UserRepository.deleteByEmail(userEmail);
  }

  //add user
  async addUser(adminEmail, username, email, password, years, role) {
    const admin = await UserRepository.findByEmail(adminEmail);
    if (!admin || admin.role !== 'ADMIN') {
        throw new Error('Unauthorized: Only admins can add users.');
    }

    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
        throw new Error('Email already in use');
    }

    const user = {
        username,
        email,
        password,
        years,
        role,
    };

    return await UserRepository.create(user);
}

}

module.exports = new userUseCases();

