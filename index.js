'use strict'

const express = require('express');
const session = require('express-session');
const router = require(__dirname + '/lib/router.js');

const config = require(__dirname + '/config.json');

let main = function(){
  //init the express application
  this.app = express();

  //setup static assets
  this.app.use(express.static('static'));

  //setup ejs
  this.app.set('view engine', 'ejs');

  this.router = new router.router(this);

  //setup port
  this.app.listen(config.http.port, function(){
    console.log('--> Listening on port ' + config.http.port);
  });
}

new main();
