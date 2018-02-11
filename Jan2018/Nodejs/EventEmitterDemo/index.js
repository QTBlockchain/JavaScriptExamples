var prime = require("./lib/prime");
prime.emitter.on(
    'Started',
    function(message) { 
        notification(message) 
    }
);
prime.emitter.on(
    "found",
    function(message) { 
        notification(message) 
    }
);
prime.emitter.on(
    "Completed",
    function(message) { 
        notification(message) 
    }
);
prime.emitter.on(
    "error",
    function(message) { 
        notification(message) 
    }
);

var notification = function notify (message) {
    console.log(message);
}

prime.findPrimeNumbers();