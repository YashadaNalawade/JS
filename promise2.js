const cart = ["top", "sandals", "jhumkas"];

const promise = createOrder(cart); // createOrder function returns a promise

promise.then(function(orderID) // we attached a callback function which executes after data is filled in promise by createOrder function
{
    console.log(orderID)
})
.catch(function(err)
{
    console.log(err.message);
}) // it is also a function like .then and we can attach another callback to it in case promise fails

function createOrder(cart)
{
    const pr = new Promise(function(resolve, reject) // creating a promise using new keyword and a promise constructor which takes a function with two parameters which are given to us by Javascript 
    {
        if(!validateCart(cart))
            {
                const err = new Error("Cart is not valid");
                reject(err);
            }
        const orderID = "12345";
        if(orderID)
            {
                resolve(orderID);
            }
    });

    return pr;
}

function validateCart(cart)
{
    return false;
}