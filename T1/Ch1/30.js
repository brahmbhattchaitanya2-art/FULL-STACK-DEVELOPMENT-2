// write node js prog usinng event module to demonstrate 
//1 registing mulp event listener for diff event("myevent1,myevent2")
//2 removing specfied event listenr for my event 2
//3 removing all listener associated with myevent1
//4 triggerring event and observe which listener are going to excute 



const EventEmittee =require("events")
const ee =new EventEmittee()

var fun1=(msg)=>{
    console.log("Message from fun1:"+msg)
};
var fun2=(msg)=>{console.log("Message from fun2:"+msg)

}

ee.on("MyEvent1",fun1)// remove all
ee.on("MyEvent2",fun2)// remove 1
ee.on("MyEvent1",fun1)// remove all
ee.on("MyEvent2",fun2)


ee.removeListener("MyEvent2",fun2)// only 1 event remove first one
ee.removeAllListeners("MyEvent1")// all event remove
ee.emit("MyEvent2","LJ University")
ee.emit("MyEvent1","LJU")