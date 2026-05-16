var http = require('http');
var fs = require("fs");
var server = http.createServer(function (req, res) {
    if(req.url ==="/") {
        res.writeHead(200, { 'JPEG': 'image/png' });
        res.write("<h1> home page </h1><img src='image.png' />");
    }
    else if(req.url ==="/image.png") {
        const img = fs.readFileSync("image.png");
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(img);
    }
    else {
       res.end("404 not found");
    }}).listen(3121, () => {
    console.log("Server is running on port 3121")
});