var express = require('express');  
var app = express();

//Static resources server
app.use(express.static(__dirname + ''));

var server = app.listen(8081, function () {  
    var port = server.address().port;
    console.log('Server running at port %s', port);
    console.log(' We Are 10 GameDeveloper. ')
});


