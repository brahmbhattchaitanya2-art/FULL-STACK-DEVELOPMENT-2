//write a node js to print query  string in file using ES6 call back ASYNC  

var fs = require("fs")
var url=require("url");
var addr="http://localhost8080/default.html?year=2028&month=feb"
var q=url.parse(addr,true)
process.noDeprecation=true



fs.writeFile("43_data.txt", JSON.stringify(q.query), (err) => {
    if (err) throw err;
    console.log("QUERY Operation Performed");
})