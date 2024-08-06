// function a()
// {
//     if(true)
//     {
//         let q = 2;
//         const p=0;
//         var varVariable = 'var';
//     }
//     console.log(varVariable); // var
//     console.log(p); // var

// }
// a();

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise fulfilled!');
//     }, 2000);
// });

// myPromise.then((message) => {
//     console.log(message); // Output after 2 seconds: Promise fulfilled!
// }).catch((error) => {
//     console.error(error);
// });

// (function() {
//     console.log('IIFE executed');
// })();

// (function()
// {
//     console.log("hello world")
// })();

// function regularFunction (name) {
//     console.log(`Hello,`, this.name);
// };

// const arrowFunction = (name) => {
//     console.log(`Hello, ${name}`);
// };

// regularFunction('Alice'); // Hello, Alice
// arrowFunction('Bob'); // Hello, Bob
// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;

        
// obj.name = "Akki";
// console.log(obj2);

// var x=10;
// var y=x;
// console.log(y)

// function x()
// {
//     // console.log("hello world");
// }

// function y(x)
// {
//     x();
// }
// y(x);

// function createMultiplier(multiplier) {
//     return function(number) {
//         return number * multiplier;
//     };
// }

// const double = createMultiplier(2); // createMultiplier returns a function that doubles the input
// const triple = createMultiplier(3); // createMultiplier returns a function that triples the input

// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// function higherOrder2() {
//     return function() {
//       console.log("do something")
//     }
//   }      
// var x = higherOrder2();
// x();   


// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();

// var obj = {
//     name:  "vivek",
//     getName: function() {
//     console.log(this.name);
//   }
// }
   
// obj.getName();
function awesomeFunction(){
    var a = 2;
  
    var multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
  }
  console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
  multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope


        