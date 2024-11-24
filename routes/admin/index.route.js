const authAdminMiddleware = require('../../middleware/admin/auth.middleware');
const adminRouter = require('./admin.route');
module.exports = (app) => {
  app.use('/admin', authAdminMiddleware.authenAdmin, adminRouter);
};
