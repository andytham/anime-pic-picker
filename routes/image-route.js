const express = require('express');
const imageRouter = express.Router();
const imageController = require('../controllers/image-controller.js');

imageRouter.get('/', imageController.index);
imageRouter.get('/search', imageController.search);
// imageRouter.get('/search/:id', imageController.show);
// imageRouter.get('/search/*', imageController.showSelected);
imageRouter.get('/search/premade', imageController.searchPremade);
imageRouter.post('/saved', imageController.create);
imageRouter.get('/saved', imageController.showSaved);
imageRouter.get('/saved/:id', imageController.show);
imageRouter.put('/saved/:id', imageController.update);
imageRouter.delete('/saved/:id', imageController.destroy);

module.exports = imageRouter;
