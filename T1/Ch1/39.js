// write a node js code to create on which  dipaley "welcome to LOGIN PAGE " AND BLUE COLOR AND FONT SIZE MUST ME 32PX,LOGING PAGE SHOW A ONE HTML FILE FROM STITTC URL HAVIIING FORM WITH DETILE USSER NAME PASS EAMIL SUBMIT AND RESET BUTTON
//  GALLRY PAGE HAVE ONE IMPGE HELLO.PNG AND IF OTHER URL PATH ADDED THEN SHOW 404 NOT FOUND
// WRIITE ALL NESSRY FILE TO COMPLETE THIS TASK


var http = require('http');
var fs=require("fs")
http.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1 style='color:blue,font-size:32px'> welcome to LOGIN PAGE </h1> <a href='index.html'>About</a> ");
        res.end();
    }
    else if (req.url === "/index.html") {
        const fetuch = fs.readFileSync("index.html");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fetuch);
    }
   else if(req.url ==="/image.png") {
           const img = fs.readFileSync("image.png");
           res.writeHead(200, { 'Content-Type': 'image/png' });
           res.end(img);
       }
    else {
        res.end("404 not found");
    }
}).listen(3121, () => {
    console.log("Server is running on port 3121")
});