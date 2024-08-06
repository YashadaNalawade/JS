const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("promise resolved!!");
   }, 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve("promise resolved!!");
    }, 10000);
 })

async function promiseHandler()
{
    console.log("hello world");

    const val = await p1; // next line will only execute once await gets value inside val.
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2; 
    console.log("Namaste JavaScript 2");
    console.log(val);
}

promiseHandler();

// console.log("hey yashada");

// function getData()
// {
//     p.then((res) => console.log(res));
//     console.log("Namaste Yashada");
// }

// getData();