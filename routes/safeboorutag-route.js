const express = require('express');
const safeboorutagRouter = express.Router();
const safeboorutagController = require('../controllers/safeboorutag-controller.js');

safeboorutagRouter.get('/', safeboorutagController.index);
safeboorutagRouter.get('/:tag', safeboorutagController.showSaved)

module.exports = safeboorutagRouter;
