var express = require('express');  
var app = express();

//Static resources server
app.use(express.static(__dirname + ''));

var server = app.listen(8081, function () {  
    var port = server.address().port;
    

  var config = {
    apiKey: "AIzaSyBi1_S5ogGhTEyywKHyPmrEmfuAq1E4qu4",
    authDomain: "wip-camp-game.firebaseapp.com",
    databaseURL: "https://wip-camp-game.firebaseio.com",
    projectId: "wip-camp-game",
    storageBucket: "wip-camp-game.appspot.com",
    messagingSenderId: "444400029"
  };
  
  'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
 
    console.log('Server running at port %s', port);
    console.log(' We Are 10 GameDeveloper. ')
});


