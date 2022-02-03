const express = require('express');
const morgan = require('morgan');

const tourRouter = require(`${__dirname}/routes/tourRouter`);
const userRouter = require(`${__dirname}/routes/userRouter`);
const AppError = require(`${__dirname}/util/appError`);
const globalErroHandler = require(`${__dirname}/controllers/errorController`);

const app = express();

//middleware
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//custom middleware.
// app.use((req, res, next) => {
//   console.log('Hello from the middle ware 👋');
//   next();
// });

//Custom middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  console.log('[-] Author: Denis Githuku 😎 denisgithuku07@gmail.com\n');
  console.log('[-] -------------------------DEV MODE-------------------------');
  next();
});

app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Couldn't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErroHandler);

module.exports = app;
