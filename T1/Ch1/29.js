
//write node js prog using event modul to sumulate a sequnce of event 
//1 when a "connection" event occur print "connection successfull" and trigger a "data received" event.
//2when the data reveived event occur print "data reveiced successfull" 
//3 final print thx at after last completed 


const EventEmittee =require("events")
const ee =new EventEmittee()



ee.on("connection",()=>{console.log("connection successfull");
    ee.emit("data");
})




ee.on("data",()=>{console.log("data reveiced successfull")
    console.log("Thanks");})

ee.emit("connection")


