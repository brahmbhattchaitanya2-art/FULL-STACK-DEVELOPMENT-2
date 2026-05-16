//write node js  script to handle event as ask below
//1) check the rediaus wheatehr it is - or not
//2 ) if negative than display radius must be + else calculate the perramet of circle
// 3) check the side is _ or not if negative than diplay mssg side must be positive else calcute the perameter of square



// const EventEmittee =require("events")
// const ee =new EventEmittee()


// var fun1 = (r) => {
//     if (r<0){
//         console.log("Must be +")

//     }
//     else{
//         let perimeter=2*3.14*r;
//         console.log("perimeter of circle:" + perimeter)

//     }

// };
// var fun2 = (side) =>{
//     if (side<0){
//         console.log("Must be +")}

//     else{
//         let perimeter= 4*side
//     console.log("perimeter of square:" + side)

//     }
// }



// ee.on("find",fun1);
// ee.on("find",fun2);
// ee.emit("find",4);
// ee.emit("find",10);






const EventEmittee = require("events")
const ee = new EventEmittee()
ee.on("negativeRadius", () => console.log("Must be +"))
ee.on("negativeSide", () => console.log("Must be +"))


ee.on("find", (r, side) => {



    if (r < 0) {
        ee.emit("negativeRadius")

    }
    else {
        let perimeter = 2 * 3.14 * r;
        console.log("perimeter of circle:" + perimeter)

    }

    if (side < 0) {

        ee.emit("negativeSide")

    }

    else {
        let square = 4 * side
        console.log("perimeter of square:" +square)

    }
})


ee.emit("find",10,30)