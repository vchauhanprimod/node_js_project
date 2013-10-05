//**Problem9**:  
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2  
//For example, 32 + 42 = 9 + 16 = 25 = 52.  
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.  
//Find the product abc.  
  
  //Special Pythagorean triplet
var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
function abc()
{
    var sum = 1000;
    var a;
    //a<b<c thus a<=sum/3
    for (a = 1; a <= sum/3; a++) 
    {
        var b;
        for (b = a + 1; b <= sum/2; b++)
        {
            var c = sum - a - b; 
            //checks the pythogorian condition
            if ( c > 0 && (a*a + b*b == c*c) )
            {
                var r= a*b*c;
                return r;
            }
        }
    }
}
console.log(abc());
}
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');

