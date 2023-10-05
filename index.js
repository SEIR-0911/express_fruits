const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })

  app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    let fiveArray = [1,2,3,4,5]
    res.send(fiveArray)
})

const fruitsArray = ['apples', 'oranges', 'grapes', 'strawberries', 'cherries']

app.get('/fruits/:name', (req, res) => {
    const fruitName = req.params.name
    const fruit = fruitsArray.find(fruit => fruit.toLowerCase() === fruitName.toLowerCase())
    if (fruit) {
        res.send(`${req.params.name}`)
    }
    else {
        res.send(`Fruit not found`)
    }
})

const veggiesArray = ['carrots', 'asparagus', 'peas', 'potatoes', 'beets']

app.get('/veggies', (req, res) => {
    res.send(veggiesArray)
})

app.get('/veggies/:name', (req, res) => {
    const veggiesName = req.params.name
    const veggies = veggiesArray.find(veggies => veggies.toLowerCase() === veggiesName.toLowerCase())
    if (veggies) {
        res.send(req.params.name)
    }
    else {
        res.send(`Fruit not found`)
    }
})

// BONUS

app.get('/fruits/sort/sort', (req, res) => {
    let fruitsArray = ['apples', 'oranges', 'grapes', 'strawberries', 'cherries']
    fruitsArray.sort()
    res.send(fruitsArray)
})


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))



