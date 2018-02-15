var assert = require('assert');
var mylib = require("../lib/MyLib");

assert.equal(mylib.getReverse(100),1,
    "Reverse of 100 is 1. But program is behaving differently");

mylib.getReverseAsync(101, function (error,result){
    assert.equal(result,101,"async reverse not working correctly");
})
