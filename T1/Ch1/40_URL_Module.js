var url=require("url");
var addr="http://localhost8080/default.html?year=2025&month=feb"
var q=url.parse(addr,true)


process.noDeprecation=true

console.log(q);