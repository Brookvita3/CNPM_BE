const jwt = require('jsonwebtoken');
require('dotenv').config('./.env');

module.exports.loginMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token)
    return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS);
    req.user = checkRefreshToken(req);
    // req.user = { userId: decoded.id, role: decoded.role }; // Lưu thông tin user từ token vào req
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is expired or not valid' });
  }
};
