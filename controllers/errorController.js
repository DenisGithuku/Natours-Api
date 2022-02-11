const AppError = require('../util/appError');

const handleCastErrorDb = (err, req, res, next) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational error. Send message to the client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programming or other error. Don't leak details to the client
  } else {
    // 1) Log error message
    console.error(err.message);

    // 2) Send a generic response
    res.status(500).json({
      status: 'error',
      message: 'Something wrong happened',
    });
  }
};

module.exports = (err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    console.log(error);
    if (error.name === 'CastError') error = handleCastErrorDb(error);
    sendErrorProd(error, res);
  }
};
