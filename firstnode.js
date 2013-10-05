var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/js'
        });
        //variable that contains the sum of previous two terms of fibonacci series
        var nt=0; 
        var pt=1; 
        var ct=2;
        var sum=2;
        //variable that contains sum of even terms of the fibonacci series
        while(nt<4000000) 
        {
            if(nt%2==0){   
                sum=sum+nt; 
       
            }
            // for generating fibonacci series
            nt=pt+ct;
            pt=ct;
            ct=nt;
        }
        res.end(sum);
    }
   
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');
