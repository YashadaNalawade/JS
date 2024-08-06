const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const promise = fetch(GITHUB_API);

console.log(promise);

promise.then(function(response) {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON from the response
    return response.json();
})
.then(function(data) {
    // Log the user data
    console.log(data);
})
.catch(function(error) {
    // Log any error that occurred during the fetch or parsing
    console.error('There was a problem with the fetch operation:', error);
});
