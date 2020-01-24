const express = require('express');
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  try {
    console.log('HEREEEE ')
  } catch (error) {
    next(error)
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

router.get('/:slug', (req, res, next) => { 
  try {
    res.send(`hit dynamic rout at ${req.params.slug}`)
  } catch (error) {
    next(error);
    console.log('The error is ', error);
  }
});

router.post('/', async (req, res, next) => {
  try {

    const page = new Page({
      title: req.body.name,
      content: req.body.content
    });

    console.log(req.body)

    await page.save();
    res.redirect('/wiki/' + page.slug)
  } catch (error) {
    next(error);
    console.log('The error is ', error);
  }
});

module.exports = router;