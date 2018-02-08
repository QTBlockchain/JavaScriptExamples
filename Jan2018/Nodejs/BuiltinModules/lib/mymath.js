var input;
var isEven = function (number,callback) {
    input = number;
    if (number<=0) {
        var error = new Error("Invalid Range Provided");
        callback(error,null);
    } else {
        callback(null,number%2==0);
    }
}

module.exports.isEven = isEven;
module.exports.input = input;
module.exports.name = "QT";
module.exports.isPrime = function (number,callback) {
    return false;
}