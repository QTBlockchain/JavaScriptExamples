
function CheckForPrime() {
    // whether input is valid number or not
    var numberEntered = document.getElementById('txtNumber').value;
    var numberConverted = parseInt(numberEntered);
    var message = "";
    if(IsPrime(numberConverted)) {
        message = numberEntered + " is Prime";
    }
    else {
        message = numberEntered + " is  not Prime";
    }
    document.getElementById('Result').innerHTML = message;

}

function IsPrime(number) {
    var index = 2;
    var isPrime = true;
    for (index = 2; index < Math.floor(number/2); index++) {
        if(number%index == 0)
        {
            isPrime = false;
            break;
        }        
    }
    return isPrime;

}