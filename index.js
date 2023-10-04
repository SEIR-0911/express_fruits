const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

app.get('/greet/:name', (req, res) => {
res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
res.send([1,2,3,4,5])
})

let fruits = [
    'banana',
    'apple',
    'plum',
    'strawberry',
    'orange',
    'cherry'
]

let veggies = [
    'broccoli',
    'spinach',
    'lettuce',
    'carrot',
    'zuchinni'

]

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
    // implement sort
    let sortedFruits = [...fruits]
    res.send(sortedFruits.sort())
  })

app.get('/fruits/:name', (req, res) => {
    fruits.forEach((fruit) => {
        if (req.params.name == fruit) {
            res.send(`${fruit} found! 😀 `)
        }
        
    })
    res.send(`${req.params.name} not found 🥲`)
})

app.get('/veggies', (req, res) => {
    res.send(veggies)
})

app.get('/veggies/:name', (req, res) => {
    veggies.forEach((veggie) => {
        if (req.params.name == veggie) {
            res.send(`${veggie} found! 😀 `)
        }
        
    })
    res.send(`${req.params.name} not found 🥲`)
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })