const express = require('express')
const PORT = process.env.PORT || 3003
const app = express()



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))

app.get('/hello', (req, res) => {
   console.log('hello world!')
   res.send('hello world')
})


// GET /greet/:name should return a greeting with the supplied name, e.g., 'Why hello there, <name>!'
// Recall you can access the URL parameters with req.params
app.get('/greet/:name', (req, res) => {
   res.send({ greet: `Why hello there, ${req.params.name}` })
})


// GET /five should return an array of the numbers from 1-5
// Remember that you can create variables above your response
app.get('/five', (req, res) => {
   res.send([1, 2, 3, 4, 5])
})


// GET /fruits should return an array of fruits that you create.
// Let's add a route that returns an array of fruits when we access the route
let fruits = ['apple', 'kiwi', 'orange', 'watermelon', 'mango', 'avacado', 'pumpkin', 'zuccini', 'summersquash', 'lemon', 'lime', 'cherry', 'rasberry', 'blackberry', 'blueberry', 'dragonfruit', 'starfruit']




app.get('/fruits', (req, res) => {
   res.send(fruits)
})

// FRUIT NAME
// Now let's add a route that takes a route parameter name and retrieves the fruit that matches the supplied name.

app.get('/fruits/:name', (req, res) => {
   
   let ids = req.params.name
   let fruit = fruits.find(fruit => fruit === ids)
   if (fruit) {
      res.send(`${fruit}`)
   } else {
      res.send('fruit not found')
   }})


// VEGGIES
// With a working route to show an array of fruits, and an individual fruit, lets take this same concept and make another route that returns an array of vegetables, then try to create a route for the individual ones


let veggies = ['carrot', 'potato', 'broccoli', 'peas']


app.get('/veggies', (req, res) => {
   res.send(veggies)
})

app.get('/veggies/:name', (req, res) => {

   let ids = req.params.name
   let veg = veggies.find(veg => veg === ids)
   if (veg) {
      res.send(`${veg}`)
   } else {
      res.send('veggie not found')
   }})

