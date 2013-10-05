//variable containing the count of prime numbers
var flag=0;
var count=0;
var p=0;
n=2;
var i;
while(1)//infinite loop
{
    count=0;
    for(i=2;i<=n/2;i++)
    {
        if(n%i==0)// to check whether the number is prime
        {
            count=1;
            break;
        }
    }
    if (count==0)
    {
        p=n;//p holds the value of prime number
        flag+=1;//to count the number of primes 
    }
    if(flag==10001)//it prints the 10001st prime number
    {
        document.write(p);
        break;
    }
    n++;
}