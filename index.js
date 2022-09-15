var events = require("events");

var eventEmitter = new events.EventEmitter();

// eventEmitter.on("seek", (msg)=> {
//     console.log(msg);
// });

// eventEmitter.emit("seek", "Hello World");

class Person extends events.EventEmitter {    
    constructor() {
        super();
    }
}

var male = new Person();
var female = new Person();

let aPerson = [male, female];

aPerson.forEach((obj) => {
    obj.on("speak", (msg1) => {
        console.log(msg1);
    });
});

// male.emit("speak", "Sunil");
// female.emit("speak", "Mani");


var express = require("express");
var kk = express();
kk.listen(3001);
console.log("************ Server Started ***************");

kk.get("/vendors", (req, resp) => {
    resp.json([{name: "Sunil"}, {name: "mani"}]);
    resp.send("This is first NodeJS micro serivce end point call");
    });
