const authUseCase = require('../../usecases/authUseCase');

// [POST] admin/add/user
module.exports.addUser = async (req, res, next) => {
  try {
    const { username, email, password, years, role } = req.body;
    await authUseCase.addUser(username, email, password, years, role);
    res.status(200).json({ message: 'User added successfully', username });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};
