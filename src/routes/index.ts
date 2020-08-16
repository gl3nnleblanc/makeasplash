import express from 'express'
import { sequelize } from '../app'
import { User } from '../models/user'

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
    sequelize.authenticate()
        .catch((error) => {
            console.error('Unable to connect to the database: ', error);
        })
        .then(() => {
            console.log('Connection has been established successfully.');
        });
    var users = User.findAll()
        .catch((error) => {
            console.error('Unable to find users: ', error);
        });
    res.render('index', users);
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
