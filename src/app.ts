import express from 'express';
import path from 'path'

const app = express();
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.send("hey");
});

module.exports = app;
