var events = require('events');
var sleepms = require('sleep-ms');

var emitter = new events.EventEmitter();

function findPrimeNumbers() {
    let primeCount=0;
    emitter.emit("Started","Started execution");
    try {
        for(let index=2; index<1000;index++)
        {
            if(IsPrime(index) == true)
            {
                //inform user
                primeCount++;
                //console.log(primeCount);
                setTimeout(
                    function () {
                        emitter.emit("found",index);        
                    }, (3000*primeCount)
                );
                
                
            }
        }
        emitter.emit("Completed","Completed Execution");    
    } catch (error) {
        emitter.emit("error", error);
        
    }
    
}

function IsPrime(number) {
    var isPrime = true;
    for(let index=2; index<Math.floor(number/2);index++){
        if(number%index == 0)
        {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


module.exports.emitter = emitter;
module.exports.findPrimeNumbers = findPrimeNumbers;