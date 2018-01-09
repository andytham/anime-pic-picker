const axios = require('axios');
const imageController = {};
const Image = require('../models/image-model.js')
const Popular = require('../public/js/safebooru-sidebar.js')

imageController.index = (req, res) => {
  res.render('index.ejs', {
    Popular: Popular
  });
}
//

imageController.search = (req, res) => {
  let randomPage = Math.trunc(Math.random() * 200);
  axios({
    method: 'get',
    url: `http://safebooru.org/index.php?page=dapi&s=post&q=index&limit=6&json=1&pid=${randomPage}&tags=-rating:questionable&tags=${req.body.search}
`
  })
  .then( data => {
    // console.log('got this back', data.data)
    res.render('search.ejs', {
      data: data.data,
      searchTerm: req.params.search,
      test: "test",
      webSite: "http://safebooru.org/images/",
    })
  })
  .catch( err => {
    res.status(500).json(err)
  })
  console.log('we done searchin');
}

imageController.create = (req,res) => {
  Image.create({
    image: req.body.image,

    tags: req.body.tags
  }, req.body.id)
  .then(image => {
    return;
  }).catch(err=> {
    res.status(400).json(err);
  })
}

imageController.showSaved = (req,res) => {
  Image.findAll()
  .then(images => {
    res.render('saved.ejs', {
      images:images
    });
  }).catch(err => {
    res.status(400).json(err);
  });
}
imageController.destroy = (req,res) => {
  Image.destroy(req.params.id)
  .then(() => {
    res.redirect('/search/saved')
  })
  .catch(err => {
    res.status(400).json(err);
  });
}


module.exports = imageController;
