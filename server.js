var express = require('express');
var app = express();

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

app.use(express.static(__dirname + "/client"));

app.listen(8000, function() {
  console.log('Kit Keeper on server 8000');
})