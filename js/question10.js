var j;
var i;
var flag=0;
var sum=0;
function abc(){
    for(j=2;j<2000000;j++)
    {
        flag=0;
        for (i=2;i<=j/2;i++)
        {
            if(j%i==0)// to check whether a number is prime.
            {
                flag=1;
                break;
            }
        }
        if(flag==0)// condition true only for prime numbers
        {
            sum=sum+j;//add prime numbers
        }
    }
    return sum;
}
console.log(abc());


