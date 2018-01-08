const axios = require('axios');
const imageController = {};

imageController.index = (req, res) => {
  res.render('index.ejs')
}
//
imageController.search = (req, res) => {

  console.log('inside search method')
  axios({
    method: 'get',
    url: `http://safebooru.org/index.php?page=dapi&s=post&q=index&limit=10&json=1&tags=boa_hancock
` //`http://api.openweathermap.org/data/2.5/weather?q=${req.body.title}&apikey=${process.env.apikey}`//${process.env.API_KEY}&t=${req.body.title}
  })
  .then( data => {
    // console.log('got this back', data.data)
    res.render('test.ejs', {
      data: data.data,
      webSite: "http://safebooru.org/images/",

    })
  })
  .catch( err => {
    res.status(500).json(err)
  })
  console.log('we done searchin');
}

module.exports = imageController;
