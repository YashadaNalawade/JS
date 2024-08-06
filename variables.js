// var x= 1;

// console.log(x);

// x=7;

// console.log(x);


// {
//     let a = 0;
//     console.log(a);
// }

// const b = 7;
// console.log(7);
// // console.log(a);

// var arr = [1, "hello", 2, null];
// console.log(arr)


let z = 3;

function foo() {
    if (true) {
        var x = '1';   // Exist in function scope
        const y = '2'; // Exist in block scope 
    }
    console.log(x);
    // console.log(y);
    console.log(z);    // Exist in global scope
}

foo();
