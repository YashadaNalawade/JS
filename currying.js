let multiply = function(x,y)
{
    console.log(x*y);
}

let multiplyby2 = multiply.bind(this,2)


multiplyby2(5);