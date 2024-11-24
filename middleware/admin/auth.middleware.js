module.exports.authenAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'ADMIN') {
    return next();
  }
  // phan nay cua fe
  return res.status(403).json({ message: 'Access denied: Admins only' });
};
