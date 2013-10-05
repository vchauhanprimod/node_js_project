//**Problem1**:  
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.  
//Find the sum of all the multiples of 3 or 5 below 1000.
 
// Multiples of 3 and 5
var http = require('http');
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        function abc(){
            var sum=0;
            for(var i=1;i<1000;i++) 
            {
                //check if the number is a multiple of either 3 or 5
                if((i%5==0)||(i%3==0))
                {
                    sum=sum+i;
                }
            }
            //returns the sum of all the multiples of 3 or 5 below 1000.
            return sum; 
        }
        console.log(abc());
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');

