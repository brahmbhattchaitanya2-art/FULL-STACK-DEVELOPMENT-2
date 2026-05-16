// node file name in terminal

var fs = require("fs")
fs.writeFileSync("File1.txt", "HEllo")
console.log("Data written Successfull")

const data = fs.readFileSync("File1.txt")
console.log(data)
console.log(data.toString())

const data1 = fs.readFileSync("File1.txt", "utf-8")
console.log(data1)


fs.appendFileSync("File1.txt", "\n  New content is World")

const NewAdd = fs.readFileSync("File1.txt", "utf-8")
console.log(NewAdd)




fs.renameSync("File1.txt", "Data.txt")
console.log("File Remamed")







fs.mkdirSync("MyFolder")
console.log("Folder Created")
// Myfolder/data.txt



fs.copyFileSync("A.txt","B.txt")

