const userUseCase = require('../../usecases/userUseCase');

require('dotenv').config('./.env');

module.exports.getinfo = async (req, res, next) => {
  try {
    const user_response = await userUseCase.getinfo(req.user.userId);
    res.status(200).json({ userInfo: user_response });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};

module.exports.changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    await userUseCase.changePassword(req.user.userId, oldPassword, newPassword);
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};

module.exports.logout = (req, res) => {
  res.redirect('/auth/logout');
};
