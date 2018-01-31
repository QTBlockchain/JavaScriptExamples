//console.log(Math.floor(455/10));
console.log(Reverse(9001));

function Reverse(number) {
    var reverse=0;
    while (number!=0) {
        var rem=number%10;
        number=Math.floor(number/10);
        reverse=reverse*10+rem;
    } 
    return reverse;
}

function IsEven(number) {
    return number%2 == 0;
}

function IsPrime(number) {
    
}

function IsPallendrome(number) {
    return number==Reverse(number);
}