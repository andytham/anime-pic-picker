const axios = require('axios');
const safeboorutagController = {};
const Safeboorutag = require('../models/safeboorutag-model.js')
const Popular = require('../public/js/safebooru-sidebar.js')

safeboorutagController.index = (req, res) => {
  Safeboorutag.findAll()
  .then(tags => {
    res.render('safeboorutags.ejs', {
      tags: tags,
      Popular: Popular
    })
  }).catch(err => {
      res.status(400).json(err)
  })
}
safeboorutagController.showSaved = (req, res) => {
  Safeboorutag.findByTag(req.params.tag)
  .then((tag) => {
    res.render('saved-by-tags.ejs',{
      tag:tag
    })
  }).catch(err => {
      res.status(400).json(err)
    })
}
safeboorutagController.showSaved2 = (req, res) => {
  Safeboorutag.findAll()
  .then(tags => {
    Safeboorutag.findByTag(req.params.tag)
    .then((tag) => {
      res.render('saved-by-tags.ejs',{
        tag:tag,
        tags:tags
      })
    }).catch(err => {
        res.status(400).json(err)
      })
  }).catch(err => {
    res.status(400).json(err)
  })
}

module.exports = safeboorutagController;
