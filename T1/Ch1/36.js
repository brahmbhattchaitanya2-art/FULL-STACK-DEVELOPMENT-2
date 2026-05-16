var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url+ "<br>");
    res.end("url fetched");
}).listen(3120, () => {
    console.log("Server is running on port 3120")
});
