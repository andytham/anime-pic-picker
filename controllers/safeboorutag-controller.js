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
    }).catch(err => {
      res.status(400).json(err)
    })
  })
}



module.exports = safeboorutagController;
