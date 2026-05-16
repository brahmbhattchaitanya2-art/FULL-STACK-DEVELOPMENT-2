// write a node js programmer to load a simple html file difine as static on node js web server and print it content as html content on brower 





var http = require("http");
var fs = require("fs");
var url = require("url");
var addr = "http://localhost:6051/4.html";
var q = url.parse(addr, true);
http.createServer(function (req, res) {
 fs.readFile("." + q.pathname, function (err, data) {
 if (err) {
 res.writeHead(404, { "Content-Type": "text/plain" });
 res.end("File Not Found");
 } else {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.end(data);
 }
 });
}).listen(6051);




// var http = require("http");
// var fs = require("fs");
// var url = require("url");

// http.createServer(function (req, res) {

//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;

//     fs.readFile(filename, function (err, data) {

//         if (err) {
//             res.writeHead(404);
//             return res.end("File not found");
//         }

//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//     });

// }).listen(3111);





// give file name at a run time   http://localhost:3111/4.html