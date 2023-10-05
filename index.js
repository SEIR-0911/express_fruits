const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
  
  })

let fiveArray = [1,2,3,4,5]

  app.get('/five', (req, res) => {
    res.send(fiveArray)
  
  })
  let fruits =["banana", "strawberry", "orange", "lemon"]

  app.get('/fruits', (req, res) => {
  //your code here 
  res.send(fruits)
})

// app.get('/fruits/:name', (req, res) => {
//   //your code here
//   // HINT - you can use a higher-order array method 
//   let chosenName = req.params.name
//   if (fruits.includes(chosenName)) {
// res.send(`I want to eat a ${req.params.name}!`)
    
//   }else{
//     res.send("That fruit doesn't exist")
//   }
      

// })



 let vegetables =["celery", "lettuce", "lima beans", "cabbage"]

  app.get('/vegetables', (req, res) => {
  //your code here 
  res.send(vegetables)
})

app.get('/vegetables/:name', (req, res) => {
  //your code here
  // HINT - you can use a higher-order array method 
  let chosenName = req.params.name
  if (vegetables.includes(chosenName)) {
res.send(`I want to eat a ${req.params.name}!`)
    
  }else{
    res.send("That vegetable doesn't exist")
  }
      

})

app.get('/fruits/sort', (req, res) => {
  // implement sort

  res.send(fruits.sort())
})