//**Problem6**:  
//The sum of the squares of the first ten natural numbers is,  
//12 + 22 + ... + 102 = 385  
//The square of the sum of the first ten natural numbers is,  
//(1 + 2 + ... + 10)2 = 552 = 3025  
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.  
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.  
  
// Sum square difference
var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        //function to find sum of the squares of the first hundred natural numbers
        function abc(){
            var i;
            var j=0;
            //variable that contains sum
            var sm=0;
            for (i=1;i<=100;i++)
            {
                //find the square
                j=i*i;
                //find the sum of squares
                sm=sm+j;
            }
            return sm;
            console.log(sm); 
        }
        // functon to find the square of the sum of the first hundred natural numbers
        function def(){
            var i;
            var j=0;
            var sm=0;
            for(i=1;i<=100;i++)
            {
                //find the sum
                sm=sm+i;
            }
            //find the square of the sum
            j=sm*sm;
            return j;
            console.log(j);
        }
        function xyz(){
            // difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
            var a=(def()-abc());
            return a;
        }
        console.log(xyz());
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');

