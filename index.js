const express = require('express')
const PORT = process.env.PORT || 3003
const app = express()



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))

app.get('/hello', (req, res) => {
   console.log('hello world!')
   res.send('hello world')
})

app.get('/greet/:name', (req, res) => {
   res.send({ greet: `Why hello there, ${req.params.name}` })
})


app.get('/five', (req, res) => {
   res.send([1, 2, 3, 4, 5])
})


let fruits = ['apple', 'kiwi', 'orange', 'watermelon', 'mango', 'avacado', 'grape', 'zuccini', 'pear', 'lemon', 'lime', 'cherry', 'melon', 'blackberry', 'blueberry', 'dragonfruit', 'starfruit']


app.get('/fruits', (req, res) => {
   res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {

   let ids = req.params.name
   let fruit = fruits.find(fruit => fruit === ids)
   if (fruit) {
      res.send(`${fruit}`)
   } else {
      res.send('fruit not found')
   }})

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
