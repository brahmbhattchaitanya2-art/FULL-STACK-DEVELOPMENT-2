// Q: Create JSON array of shapes (Square, Circle)
// Write it into shape.txt
// Read file and calculate perimeter
// Square = 4 * side
// Circle = 2 * pi * r  (r = diameter/2)
// Add perimeter in object and save again


var fs = require("fs")

const shape =[{name:"Square",side:3},{name:"Circle",diameter:4}]

fs.writeFileSync("shape.txt",JSON.stringify(shape))

const per= JSON.parse(fs.readFileSync("shape.txt","utf-8"))

d1=4*per[0].side

d2=2*3.14*per[1].diameter/2
 
fs.appendFileSync("Shape.txt",`\n   Perimeter of square ${d1}`)
fs.appendFileSync("Shape.txt",`\n   Perimeter of circle ${d2}`)

final=fs.readFileSync("shape.txt","utf-8")
console.log(final)