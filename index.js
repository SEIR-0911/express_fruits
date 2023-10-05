const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get('/greet/:name', (req, res) => {
    console.log('got name!')
    res.send(`Why hello there , ${req.params.name}`)
    //http://localhost:3001/greet/sage
  
  })



const fruitArr = ["apple", "strawberry", "pineapple"]
app.get('/fruits', (req,res) => {
    console.log(fruitArr)
    res.send(fruitArr)
    // http://localhost:3001/fruits
})

// app.get('/fruits/:name', (req, res) => {
//     if(req.params.name == "apple") {
//         res.send(fruitArr[0])
//     } else if (req.params.name == "strawberry"){
//         res.send(fruitArr[1])
//     } else if (req.params.name == "pineapple") {
//         res.send(fruitArr[2])
//     } else {
//         res.send( `Sorry! we only have apples, strawberrys, and pineapple!!`)
//     } 
//   })
//I had to comment out th eabove function for this to run.
app.get('/fruits/sort', (req, res) => {
    res.send(fruitArr.sort())
    console.log(`sorting fruits!`)
})


  const vegArr = ["broccoli", "squash", "spinach"]
  app.get('/veggies', (req,res) => {
      console.log(vegArr)
      res.send(vegArr)
      // http://localhost:3001/veggies

  })
  app.get('/veggies/:name', (req, res) => {
    if(req.params.name == "broccoli") {
        res.send(vegArr[0])
    } else if (req.params.name == "squash"){
        res.send(vegArr[1])
    } else if (req.params.name == "spinach") {
        res.send(vegArr[2])
    } else {
        res.send( `Sorry! we only have broccoli, squash, and spinach!!`)
    } 
  })

  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })