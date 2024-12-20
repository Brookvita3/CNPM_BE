const { logEvents } = require('./logEvents');

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}\t${err.message}\t${req.method}\t${req.url}`);
  console.log(err);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
