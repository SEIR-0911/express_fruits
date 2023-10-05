const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

//ROUTES
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

//greet/:name
app.get('/hello/greet/:name', (req, res) => {
    res.send({
        msg: `Why hello there ${req.params.name}!`
})
})

//five
app.get('/five', (req,res) => {
    const oneToFive = [1,2,3,4,5]
    res.send(oneToFive)
})

//FRUIT ROUTES

//fruits
app.get('/fruits', (req,res) => {
    const fruits = ['apple', 'banana', 'pear', 'watermelon', 'grapes']
    res.send(fruits)
})

//fruits/:name
app.get('/fruits/:name', (req,res) => {
    const fruits = ['apple', 'banana', 'pear', 'watermelon', 'grape', 'peach', 'plum', 'orange', 'mango', 'avocado', 'tomato']
    
    let found = fruits.find((element) => element === req.params.name)
    if (found) {
        res.send(`${req.params.name} is in the list!`)
    } else {
        res.send(`${req.params.name} is not in the list.`)
    }
})

//veggies
app.get('/veggies', (req,res) => {
    res.send(
        ['corn', 'carrot', 'onion', 'potato', 'broccoli', 'beet', 'cabbage', 'asparagus', 'beans']
    )
})

//veggies/:name
app.get('/veggies/:name', (req,res) => {
    const veggies =  ['corn', 'carrot', 'onion', 'potato', 'broccoli', 'beet', 'cabbage', 'asparagus', 'beans']

    let found = veggies.find((element) => element === req.params.name)
    if (found) {
        res.send(`${req.params.name} is in the list!`)
    } else {
        res.send(`${req.params.name} is not in the list.`)
    }
})

//Bonus
app.get('/fruit/sort', (req,res) => {
    const fruits = ['apple', 'banana', 'pear', 'watermelon', 'grapes'];
    res.send(
        fruits.sort()
    )
})

//Secret Bonus
app.get('*', (req, res) => {
    res.send('404 Not Found')
  })

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))