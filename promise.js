const api = "https://api.chucknorris.io/jokes/random";

const promise = fetch(api); // fetch returns u a promise

promise
.then((res) => // response of promise comes in data
{
    return res.json();
})
.then((data) => {
    console.log(data.value);
})
.catch((err) => {
    console.log("oops, problem", err)
})

