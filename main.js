//const { sumN, gtN } = require("./myLib");
// const myLib = require("./myLib");
// console.log(myLib.sumN(10))
// console.log(myLib.gtN(10))
function displayCurrentTime(res){
    let d = new Date();
    let msg = `Hello ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    res.write(msg);
}
var http = require('http'); // 1 - Import Node.js core module
var server = http.createServer(function (req, res) { 
    if(req.url =='/'){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });  
        // set response content    
        res.write('<html><body><p style="color:red">This is home Page.</p>');
        displayCurrentTime(res);
        res.write('<a href="/login">Login page</a>');
        res.write('<br><a href="/register">Register page</a>');
        res.write('</body></html>');
        res.end();
    }else if(req.url=='/login'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('Login');
        res.write('<html><body style="background-color:green">');
        res.write('<a href="/">Home page</a>');
        res.write('</body></html>');
        res.end();
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' }); 
        res.write("404 Unable to find the page!");
        res.end();
    }
    
});
server.listen(3000); //3 - listen for any incoming requests
