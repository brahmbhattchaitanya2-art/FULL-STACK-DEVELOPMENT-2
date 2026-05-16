
// event progrm must come in exam 1 code
//write js script to create 2 listner s for a common event.
//print no. 2 of event association wity emit
//remove one of the list and call the listner again
//also print no. of remaining event






const EventEmittee = require("events")
const ee = new EventEmittee()

var fun1 = (msg) => {
    console.log("Message from fun1:" + msg)
};
var fun2 = (msg) => {
    console.log("Message from fun2:" + msg)

}
ee.on("MyEvent", fun1)
ee.on("MyEvent", fun2)

ee.emit("MyEvent", "LJU")

let count = ee.listenerCount("MyEvent")

console.log("Count 1:" + count)
ee.removeListener("MyEvent", fun1)


let count1 = ee.listenerCount("MyEvent")
console.log("Count 1:" + count1)

ee.on("MyEvent", fun1)