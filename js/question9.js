function abc()
{
    var sum = 1000;
    var a;
    for (a = 1; a <= sum/3; a++) //a<b<c thus a<=sum/3
    {
        var b;
        for (b = a + 1; b <= sum/2; b++)
        {
            var c = sum - a - b; // 
            if ( c > 0 && (a*a + b*b == c*c) )//checks the pythogorian condition
            {
                var r= a*b*c;
                return r;
            }
        }
    }
}
document.write(abc());

