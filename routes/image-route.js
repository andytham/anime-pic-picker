const express = require('express');
const imageRouter = express.Router();
const imageController = require('../controllers/image-controller.js');

imageRouter.get('/', imageController.index);
imageRouter.get('/show', imageController.search);

module.exports = imageRouter;
