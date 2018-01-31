var number=79;
// checking for the even
if (number%2==0) {
    console.log("even");
} else {
    console.log("odd");
}

var index=2;
var isPrime=true;
while(index<number/2){
  if(number%index==0){
      isPrime= false;
  }
  index=index+1;
}

if(isPrime){
    console.log("prime");
}
else{
    console.log("not prime");
}