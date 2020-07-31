import express from 'express'
import { sequelize } from '../app'

const router: express.Router = express.Router();

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
