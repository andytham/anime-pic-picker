const express = require('express');
const safeboorutagRouter = express.Router();
const safeboorutagController = require('../controllers/safeboorutag-controller.js');

safeboorutagRouter.get('/', safeboorutagController.index);
safeboorutagRouter.get('/:tag', safeboorutagController.showSaved2)

module.exports = safeboorutagRouter;
