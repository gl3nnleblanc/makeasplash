import express from 'express'

const router: express.Router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/:id', (req, res) => {
  res.render('userpage', { id: req.params.id });
});

module.exports = router;
