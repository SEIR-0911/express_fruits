const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get('/greet/:name', (req, res) => {
    res.send(`'Why hello there, ${req.params.name}!`)
  })

  app.get('/five', (req, res) => {
    let nums = [1,2,3,4,5]
    res.send(nums)
  })

  app.get('/fruits', (req, res) => {
    let fruits = ["apple", "orange", "kiwi", "mango"] 
    res.send(fruits)
  })

  app.get('/fruits/sort', (req, res) => {
    let fruits = ["apple", "orange", "kiwi", "mango"] 
    const sortedFruits = [...fruits].sort();
    res.send(sortedFruits)
  })

  app.get('/fruits/:name', (req, res) => {
    let fruits = ["apple", "orange", "kiwi", "mango"] 
    const fruit = fruits.find(f => f === req.params.name);
  if (fruit) {
    res.send(fruit);
  } else {
    res.status(404).send('Fruit not found');
  }
});


app.get('/veggies', (req, res) => {
  let veggies = ["carrot", "broccoli", "spinach", "lettuce", "cabbage"]
  res.send(veggies);
});

app.get('/veggies/:name', (req, res) => {
  let veggies = ["carrot", "broccoli", "spinach", "lettuce", "cabbage"]
  const veggie = veggies.find(v => v === req.params.name);
  if (veggie) {
    res.send(veggie);
  } else {
    res.status(404).send('Vegetable not found');
  }
});

app.get('*', (req, res) => {
  res.send('404 Not Found')
})
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
