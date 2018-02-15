function getReverse(value) {
    var reverse = 0;
    while (value!=0) {
        reverse = (reverse * 10) + (value%10);
        value = Math.floor(value/10);
    }
    return reverse;
}

async function getReverseAsync(value,callback) {
    try{
        var reverse = 0;
        while (value!=0) {
            reverse = (reverse * 10) + (value%10);
            value = Math.floor(value/10);
        }
        callback(null,reverse)    
    }catch(error) {
        callback(error);
    }   
}

module.exports.getReverse = getReverse;
module.exports.getReverseAsync = getReverseAsync;