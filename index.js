const express = require(`express`);
const PORT = process.env.PORT || 3001
const app = express();


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))



//Start off by defining a simple GET route
app.get (`/hello`,(req, res)=> {
    console.log(`hello world!`)
    res.send (`hello world`)
})


//Greet/:name
app.get(`/message/:id`, (req,res) => {
    res.send({
        msg:`why hello there ${req.params.id}`
    })
})

app.get(`/five`, (req,res) => {
    res.send([1,2,3,4,5])
})


const fruits = ["orange", "pear", "banana","pineapple"]

//Fruite Routes
app.get('/fruits', (req, res) => {
    
   
    res.send(fruits)
  })


  ///fruits/:name
  app.get('/fruits/:name', (req, res) => {
    const fruit = fruits.find(fruit=> fruit === req.params.name)
    res.send(fruit?fruit: "no fruit found")
    
  })