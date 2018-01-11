const axios = require('axios');
const imageController = {};
const Image = require('../models/image-model.js')
const Safeboorutag = require('../models/Safeboorutag-model.js')
const Popular = require('../public/js/safebooru-sidebar.js')

imageController.index = (req, res) => {
  res.render('index.ejs', {
    Popular: Popular
  });
}
//

imageController.search = (req, res) => {
  let randomPage = Math.trunc(Math.random() * 20) + 1;
  console.log("this is page", randomPage)
  axios({
    method: 'get',
    url: `http://safebooru.org/index.php?page=dapi&s=post&q=index&limit=6&json=1&pid=${randomPage}&tags=-rating:questionable&tags=${req.body.search}
`
  })
  .then( data => {
    // console.log('got this back', data.data)
    res.render('search.ejs', {
      data: data.data,
      searchTerm: req.body.search,
      test: "test",
      webSite: "http://safebooru.org/images/",
    })
    //console.log('why u breaking', data)
  })
  .catch( err => {
    res.status(500).json(err)
  })
  console.log('we done searchin');
}

imageController.searchPremade = (req,res) => {
  console.log('SEARCH PREMADE')
  let randomPage = Math.trunc(Math.random() * 20) + 1;
  axios({
    method: 'get',
    url: `http://safebooru.org/index.php?page=dapi&s=post&q=index&limit=6&json=1&pid=${randomPage}&tags=-rating:questionable&tags=${req.body.populartags}
`
  })
  .then( data => {
    // console.log('got this back', data.data)
    console.log('hello world')
    res.render('search.ejs', {
      data: data.data,
      searchTerm: req.body.populartags,
      webSite: "http://safebooru.org/images/",
    })
    //console.log('why u breaking', data)
  })
  .catch( err => {
    res.status(500).json(err)
  })
  console.log('we done searchin');
}

imageController.create = (req,res) => {
  //return SELCT

  Image.grab({
    image: req.body.image
  })
  .then(image => {
    if(image == null){ //checks if image already exists in database
      Image.create({
        image: req.body.image,
        tags: req.body.tags
      })
      .then(image => {
        // console.log('successfully created an image', image)
          Safeboorutag.create({ //create tags after creating image in db
            image: req.body.image,
            tags: req.body.tags
          }, image.id)
          .then( testData => {
            console.log('test creation method works')

          })
          .catch(err => {
            console.log('test error', err)
            res.status(400).json(err);
          })
        })
      .catch(err => {
          res.status(400).json(err);
        })
    } else {
      console.log(image.image, "already exists")
    }
  })
  .catch(err => {
    console.log('test error', err)
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
imageController.show = (req,res) => {
  Image.findById(req.params.id)
    .then(image => {
      res.render('show.ejs',{
        image:image
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}
imageController.update = (req,res) => {
  Image.update({
    image: req.body.image,
    comment: req.body.comment
  }, req.params.id)
  .then(()=> {
    res.redirect(`/search/saved/${req.params.id}`);
  })
  .catch(err => {
    res.status(400).json(err)
  })
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
