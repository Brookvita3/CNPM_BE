const userRouter = require('./userRouter');
const authRoter = require('./authRouter');

function route(app) {
  app.use('/login', authRoter);
  app.use('/user', userRouter);
}

module.exports = route;
