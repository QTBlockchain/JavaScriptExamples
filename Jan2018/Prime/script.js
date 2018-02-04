function checkPrime() {
    for(let index=2; index<100;index++ )
    {
        var rtw=Math.random()*10000;
        //wait(rtw)
        setTimeout(function () {
            IsPrime(index);
        },rtw);

        rtw= Math.random()*5000;
        setTimeout(function () {
            reverse(index);
        },rtw);
        //IsPrime(index);
    }
}

function IsPrime(number) {
    var test=Math.random() * 1000;
    if(test<500)
    {
        console.log(number+ " is Prime");
    }
      
    console.log(number+ " is not Prime");
}

function reverse(number) {
    console.log(number);
    
}

checkPrime();