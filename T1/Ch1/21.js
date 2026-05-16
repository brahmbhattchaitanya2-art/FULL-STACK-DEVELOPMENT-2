var fs = require("fs")
fs.writeFile("AS_data.txt", "Hello", (err) => {
    if (err) throw err;
    console.log("Write Operation Performed");
})

fs.readFile("AS_data.txt",(err,data)=>{
     if (err) throw err;
    console.log(data.toString());

})
fs.appendFile("AS_data.txt","\n New Data Added",(err,d)=>{
     if (err) throw err;
    console.log("Data Updated");

})


fs.rename("AS_data.txt","Asyn_data.txt",(err)=>{
     if (err) throw err;
    console.log("Rename Doneeeeee");


})


fs.mkdir("MY_FOLDER",(err)=>{
     if (err) throw err;
    console.log("MKDIR Doneeeeee");


})



fs.rmdir("MyFolder",(err)=>{
     if (err) throw err;
    console.log("MKDIR Doneeeeee");


})

fs.copyFile("Shape.txt","")





// fs.unlink("Asyn_data.txt",
// (err)=>{
//      if (err) throw err;
//     console.log("Rename Doneeeeee");


// })







