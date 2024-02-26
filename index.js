const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
    res.send({ greet: `Why hello there, ${req.params.name}` })
})

app.get('/five', (req, res) => {
    const five = [1, 2, 3, 4, 5]
    res.send(five)
})

const fruits = ['apple', 'orange', 'pear', 'kiwi', 'mango','pumpkin', 'tomato', 'cherry']

app.get('/fruits', (req, res) => {
    res.send(fruitsruits)
})

app.get('/fruits/:name', (req, res) => {
    const name = req.params.name;
    const fruit = fruits.find(fruit => fruit === name)
  
    if (fruit) {
      res.json(fruit)
    } else {
      res.status(404).send('Fruit not found')
    }
})

const veggies = ['carrot', 'broccoli', 'spinach', 'zucchini', 'celery']

app.get('/veggies', (req, res) => {
    const veggies = ['carrot', 'broccoli', 'spinach', 'zucchini', 'celery']
    res.json(veggies);
})

  app.get('/veggies/:name', (req, res) => {
    const name = req.params.name;
    const vegetable = vegetables.find(veg => veg.toLowerCase() === name.toLowerCase())

    if (vegetable) {
        res.json(vegetable)
    } else {
        res.status(404).send('Vegetable not found')
    }
})

  

