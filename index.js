//initial imports vvvvvvvvvvvvvvvvv
const express = require('express')
const PORT = process.env.PORT || 3001
const uniqueFruits = [
    'Dragon Fruit (Pitaya)',
    'Jackfruit',
    'Durian',
    'Rambutan',
    "Buddha's Hand",
    'Jabuticaba',
    'Mangosteen',
    'Horned Melon (Kiwano)',
    'Pawpaw',
    'Chayote'
  ];
const uniqueVegetables = [
    'Kohlrabi',
    'Romanesco Broccoli',
    'Fiddlehead Ferns',
    'Jicama',
    'Purple Cauliflower',
    'Watercress',
    'Sunchoke (Jerusalem Artichoke)',
    'Bok Choy',
    'Kaleidoscope Carrots',
    'Lotus Root'
  ]
//app instance
const app = express()

//were making routes basically- the end points that we will get to in our server
app.get('/fruits/sort', (req, res) => {
    res.send(uniqueFruits.sort())
})
app.get('/hello', (req, res) => {
    console.log('hello world!')
    req.setEncoding('hello world!')
})
app.get('/greet/:name', (req, res) => {
    res.send( `Why hello there, ${req.params.name}`)
})
app.get('/five', (req, res) => {
    const five = [1, 2, 3, 4, 5]
    res.send(five)
})
app.get('/fruits', (req, res) => {
    res.send(uniqueFruits)
})
app.get('/fruits/:name', (req, res) => {
   res.send(`was your fruit .... ${req.params.name} <br> TAAAAADAAAAAAAHHH!!!!!!`)
})
app.get('/veggies', (req, res) => {
    res.send(uniqueVegetables)
})
app.get('/veggies/:name', (req, res) => {
   res.send(`was your vegetable .... ${req.params.name} <br> TAAAAADAAAAAAAHHH!!!!!!`)
})

//were binding the app to a port with app.listen()
app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍓🍎🍒 `))
