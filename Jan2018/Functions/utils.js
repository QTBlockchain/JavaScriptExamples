function IsPrime(number) {
    var index=2;
    var isPrime=true;
    while (index<Math.floor(number/2)) {
        if(number%index == 0)
        {
            isPrime = false;
            break;
        }
        index= index+1;   
    }
    return isPrime;
}
