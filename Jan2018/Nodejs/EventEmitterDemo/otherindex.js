var myevents = require("./lib/myevents");

myevents.emitter.on('Start',function (message) {
    console.log(message);
});

myevents.emitter.on("InProgress",function (message) {
    console.log(message);
});

myevents.emitter.on("Completed",function (message) {
    console.log(message);
});

myevents.start();