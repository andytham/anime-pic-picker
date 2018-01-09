const axios = require('axios');
const safeboorutagController = {};
const Safeboorutag = require('../models/image-model.js')
const Popular = require('../public/js/safebooru-sidebar.js')

safeboorutagController.index = (req, res) => {
  res.render('index.ejs', {
    Popular: Popular
  });
}


module.exports = safeboorutagController;
