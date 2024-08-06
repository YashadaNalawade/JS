
// function multiplyby2(x)
// {
//     return x * 2;
// }

// const output = arr.map(multiplyby2);

// console.log(output);

const arr = [1,2,3,4,5];

const op2 = arr.filter(function(y)
{
    return y % 2 == 0;
});

console.log(op2);