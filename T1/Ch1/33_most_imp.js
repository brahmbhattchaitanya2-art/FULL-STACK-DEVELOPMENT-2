var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1> hello </h1>");
    res.end();
}).listen(3120, () => {
    console.log("Server is running on port 3120")
});




// plain text -> text/plain
// html -> text/html
// json -> application/json 
// jpeg -> image/jpeg
