function traditional() {
    for(let index=0; index<10;index++)
    {
        console.log(index);
    }
}

function asyncway() {
    for (let index = 0; index < 10; index++) {
        var time=Math.random()*20000;
        console.log(index+"->"+time);
        setTimeout(function ( ) {
            console.log("Number is "+index+ " Random Time in milliseconds is "+time);
            
        },time);
    }
    
}