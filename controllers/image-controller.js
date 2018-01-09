const axios = require('axios');
const imageController = {};

imageController.index = (req, res) => {
  res.render('index.ejs')
}
//
imageController.search = (req, res) => {
  axios({
    method: 'get',
    url: `http://safebooru.org/index.php?page=dapi&s=post&q=index&limit=5&json=1&tags=${req.body.search}
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
    image: req.body.image
  })
  .then(()=> {
    res.redirect('/')
  }).catch(err=> {
    res.status(400).json(err);
  })
}



module.exports = imageController;
