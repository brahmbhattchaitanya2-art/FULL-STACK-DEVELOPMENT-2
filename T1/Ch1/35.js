var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = {
        name: "Chaitanya",
        age: 22
    };
    res.end(JSON.stringify(data));
}).listen(3120, () => {
    console.log("Server is running on port 3120")
});




// plain text -> text/plain
// html -> text/html
// json -> application/json 
// jpeg -> image/jpeg
// png -> image/png