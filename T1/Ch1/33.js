   // Write a Node.js program using the EventEmitter module to handle events.
// The program should:
// 1. Write data to a file.
// 2. Append additional data to the same file.
// 3. Read the data from the file.
// 4. Display the file content in the console.




const EventEmitter = require("events");
const fs = require("fs");

const ee = new EventEmitter();

// WRITE event
ee.on("write", () => {
    fs.writeFile("data.txt", "Hello, this is initial data.\n", (err) => {
        if (err) throw err;
        console.log("Data written to file.");
        
        // Trigger append after write
        ee.emit("append");
    });
});

// APPEND event
ee.on("append", () => {
    fs.appendFile("data.txt", "This is appended data.\n", (err) => {
        if (err) throw err;
        console.log("Data appended to file.");
        
        // Trigger read after append
        ee.emit("read");
    });
});

// READ event
ee.on("read", () => {
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:\n");
        console.log(data);
    });
});

// Start the process
ee.emit("write");