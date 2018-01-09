const express = require('express');
const imageRouter = express.Router();
const imageController = require('../controllers/image-controller.js');

imageRouter.get('/', imageController.index);
imageRouter.post('/search', imageController.search);
// imageRouter.get('/search/:id', imageController.show);
imageRouter.get('/search/*', imageController.showSelected);
imageRouter.post('/search/saved', imageController.create);

module.exports = imageRouter;
