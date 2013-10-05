//Problem10:  
var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        //Summation of primes
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
                    // to check whether a number is prime.
                    if(j%i==0)
                    {
                        flag=1;
                        break;
                    }
                }
                // condition true only for prime numbers
                if(flag==0)
                {
                    //add prime numbers
                    sum=sum+j;
                }
            }
            return sum;
        }
        console.log(abc());
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');

