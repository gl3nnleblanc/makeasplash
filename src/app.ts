import express from 'express';
import path from 'path'
import { Sequelize } from 'sequelize'

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/index.js')
app.use('/', indexRouter);

// TODO: replace with production db
export const sequelize = new Sequelize("postgres://postgres:password@172.17.0.2:5432")

module.exports = app;
