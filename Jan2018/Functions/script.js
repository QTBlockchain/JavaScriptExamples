
var index =1;
var count =0;
var desiredCount=6;

while(count<=desiredCount)
{
    index++;
    if(IsPrime(index))
    {
        count++;
    }
}
console.log(index);

// console.log(IsEven(101))