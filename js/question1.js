function abc(){
    var sum=0;
    for(var i=1;i<1000;i++) 
    {
        if((i%5==0)||(i%3==0)) //check if the number is a multiple of either 3 or 5
        {
            sum=sum+i;
        }
    }
    return sum; //returns the sum of all the multiples of 3 or 5 below 1000.
}
document.write(abc());

