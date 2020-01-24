const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
    console.log('The error is ', error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.json(req.body);
  } catch (error) {
    next(error);
    console.log('The error is ', error);
  }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error)
    console.log('The error is ', error);
  }
});

module.exports = router;