var express = require('express');
var app = express();

//routes
app.get('/', function (req, res) {
    var d = new Date();
    var msg = `current time is ${d.getHours()}: ${d.getMinutes()}:${d.getSeconds()}`;
    res.send(`<html><body><h1>Home page <br>${msg}</h1></body></html>`);
});
app.get('/login',  (req, res)=> {
    
    res.sendFile(__dirname + '/' + 'login.html');
})

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var fs = require('fs');
app.post('/doLogin',   (req, res)=> {
    let name = req.body.txtName;
    fs.appendFile('users.txt', `${name}\n` , 'utf8', (err)=>{});
    res.send(`Welcome ${name}`);
})

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
