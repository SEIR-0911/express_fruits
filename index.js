const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {

    const name = req.params.name
    const greet = (`Why hello there, ${name}!`)
    res.send(greet);

})

app.get('/five', (req, res) => {
    const arrayNums = [1, 2, 3, 4, 5]
    res.send(arrayNums)
})

app.get('/fruits', (req, res) => {
    const arrayOfFruits = ['apple', 'banana', 'watermelon', 'cherry', 'blueberry']
    res.send(arrayOfFruits)
})

const fruits = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'watermelon'},
    {name: 'cherry'},
    {name: 'blueberry'}
]

app.get('/fruits/:name', (req, res) => {
    const name = req.params.name

    const pickedFruit = fruits.find(fruit => fruit.name === name);
 
    if(pickedFruit) {
        res.send(pickedFruit);
    } else {
        res.send('Error! fruit not found!');
    }
})

const veggies = [
    {name: 'spinach'},
    {name: 'broccoli'},
    {name: 'carrot'},
    {name: 'seaweed'},
    {name: 'parsley'}
]

app.get('/veggies', (req, res) => {
    res.send(veggies);
})

app.get('/veggies/:name', (req, res) => {
    const name = req.params.name;

    const pickedVeggie = veggies.find(veggies => veggies.name === name);

    if(pickedVeggie) {
        res.send(pickedVeggie);
    } else {
        res.send('Error! Veggie not found!')
    }
})