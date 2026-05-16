// write node js script to copy contenrt of 1 file to another file. data should be fetch from source from txt and inshirt to distain to sourc.txt read data from  destintiob  perform this task asychronus




var fs = require("fs")
fs.writeFile("Source.txt", "Hello   Source  Cominnnngggg", (err) => {
    if (err) throw err;
    console.log("Write Operation Performed");


    fs.readFile("Source.txt", (err, data) => {
        if (err) throw err;
        console.log(data.toString());


        fs.writeFile("Destination.txt", data, (err) => {
            if (err) throw err;
            console.log("Data Updated");

            fs.readFile("Destination.txt", (err, data2) => {
                if (err) throw err;
                console.log(data2.toString());




            })




        })





    })

})

