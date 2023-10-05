const express = require('express')
const PORT = process.env.PORT || 3001


const app = express()








app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world')
})

app.get('/greet/:name', (req, res) => {
    res.send({
        Greeting: `Why hello there, ${req.params.name}`
    })
})

app.get('/five', (req, res) => 
    res.send(

        [1, 2, 3, 4, 5])
)



app.get('/fruits/:name', (req, res) => {
         fruitsData = [
            { 'name': 'Lindsay', 'fruit': 'apple' },
            { 'name': 'John', 'fruit':'orange' },
            { 'name': 'Paul', 'fruit':'mango' },
            { 'name': 'Mark', 'fruit':  'pineapple' },
            { 'name': 'George', 'fruit': 'strawberry' },
            { 'name': 'Jim', 'fruit':'kiwi' }
        ]
    const targetFruitName = req.params.name
    const fruitMatch = fruitsData.find(fruit => fruit.name === targetFruitName)

    if (fruitMatch){
        res.send({fruit: fruitMatch.fruit})
    } else {
        res.send('No fruit matches this name...☹️')
    } 
  
})

app.get('/veggies/:veggieName?', (req, res) => {
    veggies = [
        'broccoli', 'cabbage', 'carrots', 'beets', 'artichoke', 'celery', 'chicory','cauliflower', 'corn', 'daikon', 'arugula lettuce', 'parsnips', 'romaine lettuce', 'kale', 'peas', 'potatoes', 'rutabaga', 'yam'
    ]
    const veggieName = req.params.veggieName
    
    if (veggieName) {
        const chosenVeggie = veggies.find(veggie => veggie === veggieName)
        if(chosenVeggie){
            res.send(`${chosenVeggie}`)
        } else {
            res.send('No veggies match your request... Maybe some chocolate cake instead?')
        }
    }else {
        res.send(veggies.join(','))
    }

})

