//  /*
// Write a Node.js script to perform the following tasks:

// 1. Create an object:
//    { d: { a: 10, b: 20, c: [30, 10] } }
//    and write it into a text file named "s2.txt".

// 2. Read the data from the same file and perform the following operations:
//    a) Find the addition of a and b
//    b) Subtract b from each element of array c (result must always be positive)
//    c) Find the multiplication of the elements of array c

// 3. Append the results of addition, subtraction, and multiplication back into the "s2.txt" file.
// -->



var fs = require("fs")

fs.writeFileSync("S2.txt",JSON.stringify({d:{a:10,b:20,c:[30,10]}}))

data=JSON.parse(fs.readFileSync("s2.txt"))
add= data.d.a + data.d.b
sub= -(data.d.c[1]-data.d.b)
mul= data.d.c[0]*data.d.c[1]
last = add+sub+mul

fs.appendFileSync("s2.txt",`\nFinal addition of all 3 is ${last}`)

p=fs.readFileSync("s2.txt","utf-8")
console.log(p)
console.log(sub)