const authRouter = require('./auth.route');
const { authMiddleware } = require('../../middleware/authMiddleware');

module.exports = (app) => {
  app.use('/auth', authRouter);
};
