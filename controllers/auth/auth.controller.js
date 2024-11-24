const authUseCase = require('../../usecases/authUseCase');
const userUseCase = require('../../usecases/userUseCase');
const ms = require('ms');
require('dotenv').config('./.env');

// [POST] auth/login
module.exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const { accessToken, refreshToken } = await authUseCase.login(
      email,
      password,
    );

    res
      .status(200)
      .cookie('refreshToken', refreshToken, {
        httpOnly: true, // Chỉ có thể truy cập từ server
        secure: process.env.NODE_ENV === 'production', // Chỉ sử dụng HTTPS trong môi trường sản xuất
        maxAge: ms(process.env.EXPIRE_REFRESH), // Thời gian sống của cookie
      })
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};

// [POST] auth/refresh
module.exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: 'You are logged out' });

    const accessToken = await authUseCase.refreshToken(refreshToken);
    res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    if (error.message === 'jwt expired') {
      res
        .status(401)
        .json({ message: 'Refresh token expired, need login again' });
    } else res.status(400).json({ message: error.message });
    next(error);
  }
};

// [POST] auth/logout
module.exports.logout = (req, res, next) => {
  res
    .clearCookie('refreshToken')
    .status(200)
    .json({ message: 'Logout successfully' });
};
