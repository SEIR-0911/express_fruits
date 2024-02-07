const express = require('express')
const PORT = process.env.PORT || 3001
const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  })

app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')

})

app.get('/greet/:name', (req, res) => {
    console.log('greeting!')
    res.send(`Hi, ${req.params.name}, how are you?`)
})

app.get('/five', (req, res) => {
    console.log('counting...')
    const numbers = [1,2,3,4,5]
    res.send(`Here are five numbers! ${numbers}`)
})

app.get('/fruits', (req, res) => {
    console.log('fruits...')
    const fruits = ['apricot', 'plum', 'dragon fruit', 'pinneapple', 'strawberry']
    res.send(`Here are some tasty fruits! ${fruits.join(', ')}`)
})

app.get('/fruits/sort/:name', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method 
    console.log('fruits...')
    const fruits = ['apricot', 'plum', 'dragon fruit', 'pinneapple', 'strawberry']
    const fruitMatch = fruits.filter(x => x === req.params.name)
    fruitMatch.length > 0 ? res.send((`your're looking for ${req.params.name}'s! We have ${req.params.name}'s!`)) : res.send(`your're looking for ${req.params.name}'s! Sorry, we dont have ${req.params.name}'s`)
    
    
    console.log(fruitMatch)
    
  })

  app.get('/veggies', (req, res) => {
    console.log('fruits...')
    const veggies = ['tomato', 'pepper', 'avacado', 'cucmber']
    res.send(`Here are some tasty veggies! ${veggies.join(', ')}`)
})

app.get('/veggies/:name', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method 
    console.log('veggies...')
    const veggies = ['tomato', 'pepper', 'avacado', 'cucmber']
    const veggieMatch = veggies.filter(x => x === req.params.name)
    veggieMatch.length > 0 ? res.send((`your're looking for ${req.params.name}'s! We have ${req.params.name}'s!`)) : res.send(`your're looking for ${req.params.name}'s! Sorry, we dont have ${req.params.name}'s`)
    
    
    console.log(veggieMatch)
    
  })

app.get('/fruits/sort', (req, res) => {
    // implement sort
    const fruits = ['apricot', 'plum', 'dragon fruit', 'pinneapple', 'strawberry']
    const sortedFruit = fruits.sort()
    res.send(`Here are some tasty fruits in alphabetical order! ${sortedFruit.join(', ')}`)
    console.log('sorting fruit...')
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })