//  read data from file and sort in ascending order using sort command




var fs = require("fs")



let arr = [11, 15, 12, 14, 13]

fs.writeFileSync("File17.txt", arr.toString())

const t2 = fs.readFileSync("File17.txt", "utf-8")
console.log(t2)


arr.sort((a, b) => a - b);



console.log(arr)