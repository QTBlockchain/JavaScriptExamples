module.exports.reverse = function (number,callback) {
    var reverseNumber = 0;
    while (number!=0) {
        reverseNumber = reverseNumber*10 + number%10;
        number=Math.floor(number/10);
    }
    return reverseNumber;
}