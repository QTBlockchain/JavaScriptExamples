
for (var index = 1; index < 10; index++) {
    console.log("Timeout for "+index+ "is "+index*1000);
    setTimeout(function () {
        console.log("index: "+index);
    },index*1000);
    
}