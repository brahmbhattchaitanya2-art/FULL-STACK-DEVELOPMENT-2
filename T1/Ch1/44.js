// write node js to pass url and calculate the avg of 3 no. pass as qeury parameter



var url=require("url");
var addr="http://localhost8080/default.test?m1=50&m2=60&m3=70"
var q=url.parse(addr,true)
process.noDeprecation=true


var m1= parseInt(q.query.m1)

var m2= parseInt(q.query.m2)

var m3= parseInt(q.query.m3)


var avg=(m1+m2+m3)/3;
console.log(avg)