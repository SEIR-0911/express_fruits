const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    res.send(
        [1, 2, 3, 4, 5]
    )
})

// app.get('/fruits', (req, res) => {
//     res.send(
//         ['apple', 'banana', 'orange', 'peach']
//     )
// })

let fruits = ["apple", "apricot", "avocado", "banana", "blackberry", "blueberry", "cherry", "cranberry", "date", "fig", "grape", "grapefruit", "kiwi", "lemon", "lime", "mango", "melon", "nectarine", "orange", "papaya", "peach", "pear", "persimmon", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "watermelon", "kiwano", "guava", "passion fruit", "elderberry", "cantaloupe", "lychee", "dragon fruit", "star fruit", "coconut", "papaya", "aplle", "apricot", "black currant", "tomato", "pepper", "avocado", "cucumber"];

app.get('/fruits/:name', (req, res) => {
    fruits.forEach((fruit) => {
        if (req.params.name == fruit) {
            res.send(`I found you, Ms. New ${fruit}!`)
        }

    })
    res.send(`${req.params.name} isn't something I would eat, so it must not be a fruit.`)
})

let veggies = ["artichoke", "asparagus", "broccoli", "carrot", "cauliflower", "celery", "eggplant", "green bean", "kale", "lettuce", "mushroom", "onion", "potato", "pumpkin", "radish", "spinach", "sweet potato", "zucchini", "acorn squash", "butternut squash", "cabbage", "carrot", "collard greens", "garlic", "leek", "okra", "peas", "rhubarb", "rutabaga", "snap pea", "turnip", "watercress", "yam", "zucchini", "brussels sprout", "green onion", "bell pepper", "cabbage", "kohlrabi"];

app.get('/veggies', (req, res) => {
    res.send(`Veggie Page Here!`)
})

app.get('/veggies/:name', (req, res) => {
    veggies.forEach((veggies) => {
        if (req.params.name == veggies) {
            res.send(`Whose house is this? ${veggies}'s House!`)
        }
    })
    res.send(`${req.params.name} don't live here.`)
})





