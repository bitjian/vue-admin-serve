import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import config from './config';
import api from './routes/api';

const app = express();

app.use(compression());
// 开启跨域
app.use(config.cors ? cors() : (_req, _res, next) => next());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '10mb',
  }),
);
// request body size
app.use(
  bodyParser.json({
    limit: '10mb',
  }),
);
app.use(cookieParser());
app.use('/api', api());

// catch 404 and forward to error handler
app.use((req, _res, next) => {
  const err = new Error(`Not Found ${req.originalUrl}`);
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  // eslint-disable-line
  console.log(err);
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message,
  });
});

export default app;
