// var app = require('./app');
import app from './app.js'
const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});