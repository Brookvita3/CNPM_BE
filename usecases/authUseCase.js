const UserRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../middleware/authMiddleware');

// Load secret_key từ .env
require('dotenv').config({ path: './.env' });

class AuthUseCases {
  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error('Cant find account');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid password');

    // Tạo JWT token
    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    // chua check cookie (can phai dang nhap sau khi thoat khoi trang)
    user.refreshToken = refreshToken;
    await user.save();

    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY_ACESS, {
    //   expiresIn: '1h',
    // });
    return { accessToken, refreshToken };
  }

  async register(username, email, password, years) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) throw new Error('Email already in use');

    const user = await UserRepository.create({
      username,
      email,
      password,
      years,
    });
    return user;
  }

  async refreshToken(refreshToken) {
    const existingUser = await UserRepository.findByRefreshToken(refreshToken);
    if (!existingUser) throw new Error('refreshToken invalid');

    const decode = jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH);

    // Tạo Access Token mới
    const accessToken = generateAccessToken({ id: decode.id });
    return accessToken;
  }
}

module.exports = new AuthUseCases();
