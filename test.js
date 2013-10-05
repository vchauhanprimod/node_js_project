var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
   res.sendfile('./views/question1.html');
});
 
app.get('/js/question1', function(req, res) {
   res.sendfile('./js/question1.js');
});
 
app.get('/article', function(req, res) {
   res.sendfile('./views/article.html');
});
 
app.listen(3000);



