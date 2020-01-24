const express = require('express');
const router = express.Router();
const { Page } = require("../models");
const { addPage , wikiPage, main } = require('../views');

router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages))
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

router.get('/:slug', async (req, res, next) => { 
  try {
    const { slug } = req.params;
    const page = await Page.findOne({
      where: { 
        slug
      }
    })
  
    res.send(wikiPage(page));
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
    res.redirect(`/wiki/${page.slug}`)
  } catch (error) {
    next(error);
    console.log('The error is ', error);
  }
});

module.exports = router;