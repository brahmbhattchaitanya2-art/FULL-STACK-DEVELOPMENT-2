const EventEmittee =require("events")
const ee =new EventEmittee()

// ee.on("start",()=>{console.log("started");})
// ee.emit("start")


ee.on("start",(s,e)=>{console.log(`started from ${s} to ${e}`);})
ee.emit("start",1,100)