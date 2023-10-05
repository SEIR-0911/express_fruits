//Let's write the boilerplate for an express server:
//import express
const express = require("express");
//define a PORT constant variable
const PORT = process.env.PORT || 3001;
//Init an app instance
const app = express();
//import express by requiring it

//defining a get route:

app.get("/hello", (req, res) => {
  console.log("hello world!"); //logs hello world to console
  res.send("hello world!"); // puts hello world on the webpage
});

//CHAT GPT EXPLANATION OF /hello BEHIND THE SCENES:
// /hello: When you visit /hello in your browser, it sends a GET request to your Express.js server.
// The Express.js server listens for GET requests to the "/hello" path.
// When a GET request is received at "/hello," the handler function is executed.
// Inside the handler function, you have console.log('hello world!'), which logs "hello world!" to the server's console.
// You also have res.send('hello world!'), which sends the text "hello world!" as the response to the client (browser).

// MISSION 1: /greet/:name
// GET /greet/:name should return a greeting with the supplied name, e.g., 'Why hello there, <name>!'
// you can access the URL parameters with req.params

app.get("/greet:name", (req, res) => {
  //: automatically creates an object titled "params" after the code reads the ":" and fills teh object with name as a key, and the value will be the parameter that's put in by the user (/annemarie)
  const name = req.params.name; // Access the URL parameter named "name" within the object that was created ^
  const greeting = `Why hello there, ${name}!`;
  res.send(greeting);
  //one line of code: res.send(`why hello there, ${req.params.name})
});

// MISSION 2: /five
// GET /five should return an array of the numbers from 1-5
app.get("/five", (req, res) => {
  const numbers = [1, 2, 3, 4, 5]; // Create an array of numbers from 1 to 5
  res.send(numbers); // Send the array as a response
  //one line: res.send([1, 2, 3, 4, 5])
});

// MISSION 3: GET /fruits should return an array of fruits that you create.
// Let's add a route that returns an array of fruits when we access the route

// app.get('/fruits:array'), (req, res) => {
//     const array = [apples, oranges, pairs]
// res.send(req.params.array)
// }
app.get("/fruits", (req, res) => {
  const fruits = ["apples", "oranges", "pears"];
  res.send(fruits);
});

//MISSION 4:
//Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.
app.get("/fruits:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const fruits = ["apples", "oranges", "pears"];
  if (fruits.includes(name)) {
    res.send(name);
  } else {
    res.status(404).send("Fruit not found"); //sends "fruit not found" to the 404 status explanation
  }
});

//using higher order array method:
app.get("/fruits/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const fruits = ["apples", "oranges", "pears"];

  // Use Array.find() to find the matching fruit
  const matchingFruit = fruits.find((fruit) => fruit.toLowerCase() === name);

  if ((matchingFruit = true)) {
    res.send(matchingFruit); // Send the matching fruit as the response
  } else {
    res.status(404).send("Fruit not found"); // Send a 404 error if the fruit is not found
  }
});

const vegetables = ["carrots", "broccoli", "spinach"];

app.get("/vegetables:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const matchingVegetable = vegetables.find(
    (vegetable) => vegetable.toLowerCase() === name
  );
  if (matchingVegetable) {
    res.send(matchingVegetable);
  } else {
    res.status(404).send("Vegetable not found");
  }
});

//bind the app to a port with app.listen()
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
);
