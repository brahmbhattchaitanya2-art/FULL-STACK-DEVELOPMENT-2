// write a node js script to perform the task as aske
// 1. create a one page two links ("/")home page and("/about") about page
// 2. both pages must html teg a content and ruqired content 
// 3, if user add anyother uri path it shoud be 404 not found
var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write("<h1> home page </h1><a href='/about'>About</a>");
        res.end();
    }
    else if (req.url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write("<h1> about page </h1><a href='/'>Home</a>");
        res.end();
    }
    else {
        res.end("404 not found");
    }
}).listen(3121, () => {
    console.log("Server is running on port 3121")
});
