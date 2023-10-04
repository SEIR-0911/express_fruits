const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

// BASIC ROUTES
app.get('/hello', (req, res) => {
    console.log('hello world')
    res.send('hello world')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    let numbers = [1,2,3,4,5]
    res.send(numbers)
})

// FRUIT ROUTES
let fruitsArray = ['mango', 'kiwi', 'pineapple', 'banana', 'apple']

app.get('/fruits', (req, res) => {
    res.send(fruitsArray)
})

// SORT ALPHABETICALLY (didn't work until sort was above the dynamic slug)
app.get('/fruits/sort', (req, res) => {
    res.send(fruitsArray.sort())
})

// RETURN EACH FRUIT
app.get('/fruits/:name', (req, res) => {
    if (fruitsArray.includes(req.params.name)){
        fruitsArray.forEach(fruit => {
            if (req.params.name === fruit){
                res.send(`A ${fruit} was found! 🥭🥝🍍🍌🍎`)
            }
        })
    } else {
        res.send(`${req.params.name} was not found in our array 😲`)
    }
})

// VEGGIE ROUTE
let veggiesArray = ['carrot', 'lettuce', 'potato', 'broccoli', 'onion']

app.get('/veggies', (req, res) => {
    res.send(veggiesArray)
})

// SORT ALPHABETICALLY
app.get('/veggies/sort', (req, res) => {
    res.send(veggiesArray.sort())
})


// FIND VEGGIE BY NAME
app.get('/veggies/:name', (req, res) => {
    if (veggiesArray.includes(req.params.name)) {
        veggiesArray.forEach(veggie => {
            if(req.params.name === veggie){
                res.send(`A ${veggie} was found! 🥕🥬🥔🥦🧅`)
            }
        })
    } else {
        res.send(`${req.params.name} was not found in our array 😲`)
    }
})

app.get('*', (req, res) => {
    res.send(`404 Not Found 🤷` )
})