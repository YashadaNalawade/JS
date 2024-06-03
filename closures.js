function outermost()
{
    var x=40;
    function outer(b)
{
    function inner()
    {
        console.log(a,b,x);
    }
    let a = 10;
    return inner;
}
return outer;
}

let a = 100; // is a completely new variable in global scope
var close = outermost()("helloworld");
close();






// function z()
// {
//     var a =10;
//     function y()
//     {
//         var b = 2;
//         function x()
//         {
//             console.log(a,b);
//         }
//         x();
//     }
//     y();
// }
// z();