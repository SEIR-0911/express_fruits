const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));

//Start off by defining a simple GET route:
app.get("/hello", (req, res) => {
    res.send("Hello! Welcome to Frute APP.");
});

/**
 * /greet/:name
 * GET /greet/:name should return a greeting with the supplied name,
 *  e.g., 'Why hello there, <name>!'
 */

app.get(`/greet/:username`, (req, res) => {
    console.log(`hello ${req.params.username}!`);
    res.send(`hello ${req.params.username}!`);

});

//GET /five should return an array of the numbers from 1-5
const fiveNum = [1, 2, 3, 4, 5];

app.get('/five', (req, res) => {
    console.log(fiveNum);
    res.send(`[ ${fiveNum} ]`);
});

//GET /fruits should return an array of fruits that you create.

const fruits = ["Mongo", "Apple", "Banana", "Kiwi", "Cherry", "Strawberry", "Blueberry", "Raspberry", "Fig", "Gooseberry", "Citrus", "Grape"];



//Bonus GET /fruits/sort should return the fruits array sorted alphabetically using .sort(). had to move it to the top so it checks if user wants to sort

app.get('/fruits/sort/', (req, res, next) => {
    console.log("can you see me!");
    res.send(fruits.sort().join());
});

app.get('/fruits', (req, res) => {
    console.log("returning an array of fruets: ", fruits);
    res.send(`${fruits}`);
});

//fruits/:name takes a route parameter name and retrieves the fruit that matches the supplied name.
app.get('/fruits/:name', (req, res) => {
    let fruit = fruits.find((item) => item.toLocaleLowerCase() === req.params.name.toLocaleLowerCase());
    console.log("Showing one frute", fruit);
    if (fruit != "sort") {
        fruit ? res.send(`${fruit}`) : res.status(404).send("Not in the list");
    } else return;
});


///veggies
/**
 *  make another route that returns an array of vegetables, 
 * then try to create a route for the individual ones
 * */

const vegetables = ["Artichoke", "Asparagus", "Kale", "Leeks", "Arugula Lettuce", "Squash", "Cauliflower", "Celery", "Corn"];
app.get('/veggies', (req, res) => {
    console.log("returning an array of Vegitables: ", vegetables);
    res.send(`${vegetables}`);
});

app.get('/veggies/:name', (req, res) => {
    let vegetable = vegetables.find((item) => item.toLocaleLowerCase() === req.params.name.toLocaleLowerCase());
    console.log("Showing one frute", vegetable);
    vegetable ? res.send(`${vegetable}`) : res.status(404).send("Not in the list");
});
