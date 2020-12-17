const fetch = require("node-fetch");

/**
 * Normal fetch()
 *
 * Uncomment the code to try it
 */
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (users) {
//     console.log(users);
//   });

/**
 * fetch() error handling
 *
 * Uncomment the code to try it
 */
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then(function (response) {
//     // fetch will only reject on network failure
//     // or if anything prevented the request from completing
//     // For any other error it will set the response.ok
//     // property to false
//     if (!response.ok) {
//       throw new Error(`Request failed with: ${response.status}`);
//     }

//     return response.json();
//   })
//   .then(function (users) {
//     console.log(users);
//   })
//   .catch(function (error) {
//     // we can handle network errors in the .catch() method
//     console.log(error);
//   });

/**
 * fetch() with options
 *
 * Uncomment the code to try it
 */
// fetch("https://jsonplaceholder.typicode.com/users/", {
//   // GET, POST, PUT, DELETE, etc.
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // body data type must match "Content-Type" header
//   body: JSON.stringify({ firstName: "Dani" }),
// }).then((response) => console.log(response.ok));
