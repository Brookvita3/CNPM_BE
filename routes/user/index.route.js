const authUserMiddleware = require('../../middleware/user/auth.middleware');
const userRouter = require('./user.route');

module.exports = (app) => {
  app.use('/user', authUserMiddleware.authenUser, userRouter);
};
