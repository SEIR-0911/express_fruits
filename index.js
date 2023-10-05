const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()



app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')
  
  })

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
  let arr = [1, 2, 3, 4, 5]
  res.send(`We have an array with ${arr}`)
})

let fruits = ["Apple","Orange","Grapes","Mango","Banana","Grapefruit","Strawberry","Plum","Pineapple","Lemon","peach","Apricot","Berry","Watermelon","Star Fruit","Kiwi","Cherry","Rambutan","Cacao","Papaya","Raspberry"]

let vegetables = ["Carrot", "Potato", "Celery",  "Broccoli", "Okra", "Cucumber"]

app.get('/fruits', (req, res) => {
    res.send(fruits)
  })


app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name;
  const fruit = fruits.find(fruit => fruit.toLowerCase() === fruitName.toLowerCase());
  if (fruit) {
    res.send(`Found fruit: ${fruit}`);
  } else {
    res.send('Fruit not found.');
  }
  })


app.get('/vegetables', (req, res) => {
  res.send(vegetables)
})

// I did both routes, but Ryan ispired us to make a route that could access both the array and each individual vegetable. Not sure if it matters, but we thought it was cool.

app.get('/vegetables/:name', (req, res) => {
  const vegetableName = req.params.name;
  const vegetable = vegetables.find(vegetable => vegetable.toLowerCase() === vegetableName.toLowerCase());
  if (vegetable) {
    res.send(`Found Veggie: ${vegetable}`);
  } else if (vegetableName === 'array') {
    res.send(vegetables);
  } else {
    res.send('Veggie not found.');
  }
  })

app.get('/fruits/sort/extraSort', (req, res) => {
    fruits.sort()
    res.send(fruits);
  })




  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })



  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))



