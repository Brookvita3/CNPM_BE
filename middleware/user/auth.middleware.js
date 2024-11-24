module.exports.authenUser = (req, res, next) => {
  if (req.user && req.user.role === 'USER') {
    return next();
  }
  // phan nay cua fe
  return res.status(403).json({ message: 'Access denied: User only' });
};
