var events = require('events');
var emitter = new events.EventEmitter();

function start() {
    emitter.emit("Start","Started Working");

    setTimeout(function(){
        emitter.emit ("InProgress", "Halfway Through")
    },10000);

    setTimeout(function (params) {
        emitter.emit("Completed", "Completed")
    },20000);
    
}

module.exports.emitter = emitter;
module.exports.start = start;