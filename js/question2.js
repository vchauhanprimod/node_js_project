var nt=0; //variable that contains the sum of previous two terms of fibonacci series
var pt=1; 
var ct=2;
var sum=2;//variable that contains sum of even terms of the fibonacci series
while(nt<4000000) 
{
    if(nt%2==0){   //checks whether the number is even 
        sum=sum+nt; //update the sum if the 
        console.log(sum);
    }// for generating fibonacci series
    nt=pt+ct;
    pt=ct;
    ct=nt;
}
document.write(sum);

