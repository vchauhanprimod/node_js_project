function sumsofquares(){ //function to find sum of the squares of the first ne hundred natural numbers
    var i;
    var j=0;
    var sm=0;//variable that contains sum
    for (i=1;i<=100;i++)
    {
        j=i*i;//find the square
        sm=sm+j;//find the sum of squares
    }
    return sm;
    document.write(sm); 
}
function def(){// functon to find the square of the sum of the first hundred natural numbers
    var i;
    var j=0;
    var sm=0;
    for(i=1;i<=100;i++)
    {
        sm=sm+i;//find the sum
    }
    j=sm*sm;//find the square of the sum
    return j;
    document.write(j);
}
function xyz(){// difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
    var a=(def()-abc());
    return a;
}
document.write(xyz());

