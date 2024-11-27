const userRouter = require('./userRouter');
const authRoter = require('./authRouter');
const adminRouter = require('./adminRouter');

function route(app) {
  app.use('/login', authRoter);
  app.use('/user', userRouter);
  app.use('/admin', adminRouter);
}

module.exports = route;
