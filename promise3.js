// Creating a new Promise
let myPromise = new Promise((resolve, reject) => {
    let success = false; // Simulate an asynchronous operation result
  
    if (success) {
      resolve("The operation was successful!"); // The promise is fulfilled
    } else {
      reject("The operation failed."); // The promise is rejected
    }
  });

  // Handling the Promise result
  myPromise
    .then((message) => {
      console.log(message); // This will run if the promise is fulfilled
    })
    .catch((error) => {
      console.error(error); // This will run if the promise is rejected
    });
  