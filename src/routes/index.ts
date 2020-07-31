import express from 'express'
import { sequelize } from '../app'
import { User } from '../models/user'

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
  var users = User.findAll();
  res.render('index', users);
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
