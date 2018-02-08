var mymath = require("./lib/mymath");

var isEvenCallback = function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log("Is Even")
    }   
}

mymath.isEven(4,isEvenCallback);
console.log(mymath.input);
console.log(mymath.name);