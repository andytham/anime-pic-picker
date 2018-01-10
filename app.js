const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(methodOverride('_method'));

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

app.use('/', require('./routes/image-route.js'));
app.use('/tags',require('./routes/safeboorutag-route.js'))

app.get('*', (req,res) =>{
  res.send('broke')
  //res.redirect('/');
})
