'use strict'

module.exports.router = function(root){
  this.root = root;
  let app = this.root.app;

  app.get('/', function(req, res){
    //render the homepage
    res.render('homepage.ejs');
  });
}
