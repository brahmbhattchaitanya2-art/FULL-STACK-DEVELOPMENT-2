// write node js script to write and arr of bject with property name and age in file name student.txt . then read file and display object on console





var fs = require("fs")

let person = [{name:"Dev",age:25},{name:"Jay",age:26},{name:"Ved",age:24},]


fs.writeFileSync("Student.txt", JSON.stringify(person))

const t2 = fs.readFileSync("Student.txt", "utf-8")
b=JSON.parse(t2)
console.log(b)