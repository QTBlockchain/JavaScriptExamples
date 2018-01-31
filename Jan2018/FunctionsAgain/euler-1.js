function Euler1(limit) {
    var number1=3;
    var number2=5;
    var sum= 0;
    for(var index=1;index<limit;index++) {
        if(index%number1==0 || index%number2==0){
            sum= sum+index;
        }
    } 
    return sum;
}