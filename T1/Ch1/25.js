// Write a Node.js program that does the following using async methods:

// 1. Write the text "You are creating a file" into a file named help.txt.
// 2. Append the text "You are appending data" to the same help.txt file.
// 3. Read the content of help.txt and display it on the console.
// 4. After finishing the read operation, print "Thanks for using my prog" on the console.

// Note: The write, append, and read operations must be performed sequentially using async methods.


var fs = require("fs");

fs.writeFile("help.txt", "You are creating a file", (err) => {
    if (err) throw err;
    console.log("Write Operation Performed");

    fs.appendFile("help.txt", "\nYou are appending data", (err) => {
        if (err) throw err;
        console.log("Data Updated");

        fs.readFile("help.txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);

            console.log("Thanks for using my prog");
        });
    });
});









// var fs = require("fs");

// fs.writeFile("help.txt", "You are creating a file", (err) => {
//     if (err) throw err;
//     console.log("Write Operation Performed");

//     fs.appendFile("help.txt", "\nYou are appending data", (err) => {
//         if (err) throw err;
//         console.log("Data Updated");

//         fs.readFile("help.txt", "utf8", (err, data) => {
//             if (err) throw err;
//             console.log(data);

//             // print final message after read
//             console.log("Thanks for using my prog");
//         });
//     });
// });