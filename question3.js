//**Problem3**:  
//The prime factors of 13195 are 5, 7, 13 and 29.  
//What is the largest prime factor of the number 600851475143 ?  
  
  // Largest prime factor!!
var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        function abc(num){
            var i=1;
            var j;
            //variable that contains count
            var k; 
            var t=0;
            while(i<=num){
                k=0;
                if(num%i==0)
                //finds out the factors of given number
                {
                    j=1;
                    while(j<=i)
                    // to check if the factor of num is prime
                    { 
                        if(i%j==0)
                            k++;
                        j++;
                    } 
                    if(k==2)
                    // to find the largest prime factor
                    {
                        if(t<=i)
                        {
                            t=i;
                        } 
                    }
                }
                i++;
            }
            //prints the largest prime factor of the number 600851475143
            console.log(t);
        }
        abc(600851475143);
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');
