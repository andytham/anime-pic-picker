const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

app.use('/image', require('./routes/image-route.js'));

app.get('/', (req,res) => {
  res.render('index.ejs');
})

app.get('*', (req,res) =>{
  res.send('404 error');
})
