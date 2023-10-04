const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

//adding basic routes
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })

app.get('/greet/:name', (req, res) => {
    res.send({
        msg:`Why hello there, ${req.params.name}!`
    })
})

let five = [1,2,3,4,5]
app.get('/five', (req, res) => {
    res.send(five)
})

//adding the fruit routes
const fruits = ['apple', 'orange', 'banana', 'strawberry', 'grapes']
app.get('/fruits', (req, res) => {
    res.send(fruits)
})
 //sorted fruits have to go above /:name, otherwise whatever you type into the url bar after fruits/ it will assume is a name parameter
app.get('/fruits/sort', (req, res) => {
    res.send(fruits.sort())
})

app.get('/fruits/:name', (req, res) => {
    res.send(
        fruits.find((fruit) => fruit == req.params.name) 
    )
})

//making the veggie routes
const veggies = ['broccoli', 'spinach', 'collards', 'carrots', 'potatoes', 'celery']

app.get('/veggies', (req, res) => {
    res.send (veggies)
})

app.get('/veggies/sort', (req, res) => {
    res.send(
        veggies.sort()
    )
  })

app.get('/veggies/:name', (req, res) => {
    res.send(
        veggies.find((veggie) => veggie == req.params.name)
        )
})

app.get('*', (req, res) => {
    res.send('404 Not Found 💀')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))