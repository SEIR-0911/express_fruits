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

app.get('/fruits/:name', (req, res) => {
    let fruitsArray = ['apples', 'oranges', 'grapes', 'strawberries', 'cherries']
    res.send(`${req.params.name}`)
})

app.get('/veggies/:name', (req, res) => {
    let veggiesArray = ['carrots', 'asparagus', 'peas', 'potatoes', 'beets']
    res.send(`${req.params.name}`)
})

// BONUS

app.get('/fruits/sort', (req, res) => {
    let fruitsArray = ['apples', 'oranges', 'grapes', 'strawberries', 'cherries']
    fruitsArray.sort()
    res.send(fruitsArray)
})


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))



