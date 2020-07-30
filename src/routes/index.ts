import express from 'express'
import { Sequelize } from 'sequelize'

const router: express.Router = express.Router();

// TODO: replace with production db
const sequelize = new Sequelize("postgres://postgres@localhost:5432")

router.get('/', async (req, res) => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
  res.render('index');
});

router.get('/:id', (req, res) => {
  res.render('userpage', { id: req.params.id });
});

module.exports = router;
