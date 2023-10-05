const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

//   app.get('/message/:id', (request, response) => {
//     console.log(`Getting a message with the id of ${request.params.id}`)
//     response.send({ msg: `Message with an id of ${request.params.id} found` })
//   })

  app.get('/greet/:name',  (req, res) => {
    console.log(`Why hello there, ${req.params.name}!`)
    res.send(`Why hello there, ${req.params.name}!`)
  })

 

  app.get('/five',  (req, res) => {
    const array = [ 1, 2, 3, 4, 5]
    console.log(`${array}`)
    res.send(`${array}`)
  })

//   app.get('/fruits', (req, res) => {
//     const fruits = [' apple', ' banana', ' grape', ' lemon', ' mango', ' orange']
//     res.send(`${fruits}`)
//   })

//   app.get('/fruits/:name', (req, res) => {
//     const fruits = ['apple', 'banana', 'grape', 'lemon', 'mango', 'orange']
//     const specFruit = fruits.filter(ele => ele === req.params.name)
//     console.log(req.params.name)
//     res.send(`${specFruit}`)
//   })

  app.get('/veggies', (req, res) => {
     const veggies = [ 'onion', 'cabbage', 'potato', 'carrot', 'broccoli']
     res.send(`${veggies}`)
  })

  app.get('/veggies/:name', (req, res) => {
    const veggies = [ 'onion', 'cabbage', 'potato', 'carrot', 'broccoli']
    const specVeggie = veggies.filter(ele => ele === req.params.name)
    res.send(`${specVeggie}`)
  })


  app.get('/fruits/sort', (req, res) => {
    const fruits = [ 'mango', 'banana', 'lemon', 'grape', 'orange', 'apple']
    const srtfruits = fruits.sort()
    console.log(srtfruits)
    res.send(`${srtfruits}`)
  })







  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))