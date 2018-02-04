var isEven = function (value,callback) {
    //
    var waitTime = Math.floor(Math.random() * 5000);
    if(value%2 ==1 ){
        setTimeout(
            function () {
                var error = new Error(value+ " is odd");
                callback(error,null);        
            }
            ,waitTime);
    } else {
        setTimeout(
            function () {
                callback(null,value,true);
            }
            ,waitTime);
    }
}

function handleResults(error,value,isEven) {
    //error handling
    if(error){
        console.log("ERROR: "+error);
    } else{
        console.log(value+" is Even");
    }
}


isEven(11,handleResults);
isEven(12,handleResults);