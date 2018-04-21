var express = require ('express');
const axios = require ('axios');
const  forecast = require ('./forecast/forecast');
//const url = 'https://api.darksky.net/forecast/1b56dc1521cfdaf67fa3f1f78ccf05ac/37.8267,-122.4233'
forecast.getForecast (37.8267,-122.4233)
    .then((data) => {
        console.log (JSON.stringify(data, undefined, 2));
    });

var app = express();
app.use (express.static(__dirname + '/frontend'));
// TODO:lambda
app.get('/', function(req, res){
    res.send('This is home');
});

app.get('/get-user', function(req, res){
    res.send('This is user');
});


app.get('/get-user/:id', function(req, res){
    res.send('Id is -' + req.params.id);
  //console.log ('Id is -' + req.params.id);
});

app.get('/get-goods/:phones/:price', function(req, res){
    
    var obj = {
        phones: req.params.phones,
        price: req.params.price
    };
  // console.log (JSON.stringify(obj));
   res.json(obj);
 });
 
 app.get('/get-goods/', function(req, res){
    //res.send('Id is -' + req.params.id);
    var obj = {
        good: req.query.good,
        price_order: req.query.price_order
    };
   //console.log (JSON.stringify(obj));
   res.json(obj);
 });


const ApplicationPort = process.env.PORT || 3000;
app.listen(ApplicationPort);


// beatify extension - html, js
// js code sepration into about separate file