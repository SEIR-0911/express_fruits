const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')

  })

app.get("/greet/:name", (req,res)=> {
res.send({greet:`why hello there, ${req.params.name}` })


})

app.get('/five', (req,res) => {
res.send([ 1,2,3,4,5])

})



let fruits = ["apples", 'bananas', 'Oranges', 'Blackberries', 'Tomatoes'] 

app.get('/fruits', (req, res) => {
    res.send(fruits)
  })


app.get("/fruits/:name", (req, res) => {
    res.send({fruits: `name, ${req.params.name}` })

})



let veggies = ["Spinach", "Kale", "Broccoli", "Beets"]

app.get('/veggies', (req, res) => {
    res.send(veggies)
})

app.get("/veggies/:name", (req, res) =>{
   res.send({veggies: `name, ${req.params.name}`

})



})




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


