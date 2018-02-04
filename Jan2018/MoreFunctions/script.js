function display() {
    setTimeout(display1,10000);
    display2();
    setTimeout(function (){
        console.log("3");
        
    },1000);    
}

function display1() {
    console.log("1");
}

function display2() {
    console.log("2")
}