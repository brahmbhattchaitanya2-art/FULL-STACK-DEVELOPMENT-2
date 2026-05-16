// Write a Node.js program that performs the following tasks using 
// the path module and fs (file system) module:

// 1. From a given file path, extract directory, file name, and extension.
// 2. Create a new directory inside the existing folder.
// 3. Extract the file name from the given path.
// 4. Create a file inside the new directory and write some data into it.
// 5. Copy the content into another file.
// 6. Delete the original file after copying.


var fs = require("fs");
var path = require("path");

let oldpath = "C:/FSD/T1/Ch1/27.js";

// extract path info
let dir = path.dirname(oldpath);
let file = path.basename(oldpath);

// create new directory inside existing folder
let newDir = dir + "/extracted";

// correct file path inside new directory
let newfile = newDir + "/" + file;

console.log("New File Path:", newfile);

// create directory
// fs.mkdir(newDir, (err) => {
//     if (err) throw err;
//     console.log("Directory Created");

    // create file and write data
    fs.writeFile(newfile, "Hello", (err) => {
        if (err) throw err;
        console.log("File Created");

        // copy content
        let copyFile = newDir + "/copy_" + file;

        fs.readFile(newfile, "utf8", (err, data) => {
            if (err) throw err;

            fs.writeFile(copyFile, data, (err) => {
                if (err) throw err;
                console.log("File Copied");

                // delete original file
                // fs.unlink(newfile, (err) => {
                //     if (err) throw err;
                //     console.log("Original File Deleted");
                // });
            // });
        });
    });
});