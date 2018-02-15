var assert = require('assert');
var mylib = require("../lib/MyLib");

describe("mylib",function () {
   describe("getReverse",function () {
       it("should give 0 as reverse when 0 is passed",function () {
           var result = mylib.getReverse(0);
           console.log("result is "+result)
           assert.equal(result,0);
       });

       it("should give 101 as reverse when  101 is passed", function () {
           assert.equal(mylib.getReverse(101),101);
       })
   });
   
   describe("getReverseAsync", function () {
       it("should give 0 as reverse when 0 is passed", function () {
           mylib.getReverseAsync(0, function (error,result) {
               assert.equal(result,0);
           })
       })
   })
});