import express from 'express';
import path from 'path'

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/index.js')
app.use('/', indexRouter);


module.exports = app;
