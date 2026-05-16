var os = require("path")




path=os.dirname("D:/LJ/abc.html")
console.log(path)

path=os.basename("D:/LJ/abc.html")
console.log(path)



ext=os.extname("D:/LJ/abc.html")
console.log(ext)



path=os.parse("D:/LJ/abc.html")
console.log(path)
if (path.ext=="txt"){
    console.log("Text documnet")

}
else{
    console.log("Not a text Document")

}