let fs = require("fs")


fs.writeFile("Text1.txt", "Hello World", function (err)
 {
    if (err) 
        { console.log("Error Generated") }
    else{
    console.log(err)
    console.log("Asynch write opration done")
    }

})

console.log("Outside")