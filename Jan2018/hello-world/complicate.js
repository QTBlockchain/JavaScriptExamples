var message = "This is global scope";

var test = function check(params) {
    var message = "This is of check scope";
    console.log(message);
};

function othercheck(message) {
    message = "This is in othercheck scope";
    function anothercheck() {
        console.log(message);
    }
    anothercheck();
}

console.log(message);
test();
othercheck();