function abc(num){
    var i=1;
    var j;
    var k; //variable that contains count
    var t=0;
    while(i<=num){
        k=0;
        if(num%i==0){//finds out the factors of given number
            j=1;
            while(j<=i){ // to check if the factor of num is prime
                if(i%j==0)
                    k++;
                j++;
            } 
            if(k==2)
            {// to find the largest prime factor
                if(t<=i){
                    t=i;
                } 
            }
        }
        i++;
    }
    document.write(t);//prints the largest prime factor of the number 600851475143
}
abc(600851475143);

