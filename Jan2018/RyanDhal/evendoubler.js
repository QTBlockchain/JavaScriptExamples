

// function 

var processResults = function (value,callback) {
    var waitTime = Math.floor(Math.random()*1000);
    
    if( value%2 == 1)  {
        setTimeout( function () {
            var error = new Error("Odd input with waittime "+waitTime);
            callback(error,null,null);
            
        }
            ,waitTime);
    } else {
        setTimeout(
            function () {
                callback(null,value*2,waitTime);
            }
            ,waitTime);
    }

}

function resultsCallback(e,result,waitTime) {
    if(e){
        console.log("ERROR: "+e);
    } else{
        console.log("RESULT: "+result+" Wait time in mSec: "+waitTime);
    }
}

//processResults(4,resultsCallback);
//processResults(3,resultsCallback);

for (let index = 10; index < 20; index++) {
    processResults(index,resultsCallback);
    
}