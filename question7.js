//**Problem7**:  
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.  
//What is the 10 001st prime number?  
  
  //10001st prime
var http = require('http');
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        //variable to hold the count of prime numbers
        var flag=0;
        var count=0;
        var p=0;
        n=2;
        var i;
        //infinite loop
        while(1)
        {
            count=0;
            for(i=2;i<=n/2;i++)
            {
                // to check whether the number is prime
                if(n%i==0)
                {
                    count=1;
                    break;
                }
            }
            if (count==0)
            {
                //p holds the value of prime number
                p=n;
                //to count the number of primes
                flag+=1; 
            }
            if(flag==10001)
            {
                //it prints the 10001st prime number
                console.log(p);
                break;
            }
            n++;
        }
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');

