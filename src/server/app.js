var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var config = require('../config/default');

var r = require('./db');


var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));


var apiRoutes = express.Router();
require('./routes/users')(apiRoutes);
require('./routes/settings')(apiRoutes);

app.use('/api', apiRoutes);



  // all other routes are handled by Angular
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port '+app.get('port'));
});

module.exports = app;
