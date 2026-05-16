//write noden js to fetch the query string from  the url and check here is leap year or not

var url=require("url");
var addr="http://localhost8080/default.html?year=2028&month=feb"
var q=url.parse(addr,true)

var year=q.query.year;
console.log(year);

if (year %4 ===0 ){
    console.log(year + " is leap year")
}
else{
    console.log(year+ "NOT a leap year")
}