const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();







//Landing Page
app.get(`/`, (req, res) => {
    res.send(`landing page`)
})

//Hello
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })


//BASIC ROUTES

  //GET Name
app.get(`/greet/:name`, (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

//five
app.get(`/five`, (req, res) => {
    let five = [1,2,3,4,5]
    res.send(five)
})

//ARRAYS

const fruitArray = [
    `orange`,
    `pepper`,
    `STRAWBERRY`,
    `banana`,
    `peach`,
    `plum`,
    
]

const vegetablesArray = [
    {
        name: `tomato`,
        isReally: `radish`,
        looksLikeSelf: true
    },

    {
        name: `pepper`,
        isReally: `mushroom`,
        looksLikeSelf: false
    },
    {
        name: `pumpkin`,
        isReally: `lettuce`,
        looksLikeSelf: false
    },
    {
        name: `cucumber`,
        isReally: `broccoli`,
        looksLikeSelf: true
    }
]

// console.log(fruitArray.findIndex("orange"))


//FRUIT ROUTES
app.get(`/fruits`, (req, res) => {
    res.send(fruitArray)
})

app.get(`/fruits/:name`, (req, res) => {
   
    let fruitIndex = fruitArray.indexOf(req.params.name)
    //Bonus #1
    if (req.params.name == `sort`) {
        // let sortedFruits = fruitArray.sort()
        //https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
        let sortedFruits = fruitArray.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        res.send(sortedFruits)
    } else //Fruit Match 
    {
        fruitIndex == -1 ? res.send(`ERROR - This fruit is unavailable`) : res.send(fruitArray[fruitIndex])
    }
    

})

//VEGGIE ROUTES
app.get(`/veggies`, (req, res) => {
    
    let vegArray = new Array
    vegetablesArray.forEach((element, index) => {
        vegArray[index] = element.name
        console.log(`This ${element.name} is really a ${element.isReally}`)
    })

    res.send(vegArray)

})

app.get(`/veggies/:name`, (req, res) => {
   //https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
   let veggieIndex = vegetablesArray.findIndex(element => element.name == req.params.name)
   console.log(`Surprise! This ${req.params.name} is actually a vegetable!`)
   veggieIndex == -1 ? res.send(`ERROR - This vegetable is unavailable`) : res.send(vegetablesArray[veggieIndex].isReally)
})

//Bonus #2
app.get('*', (req, res) => {
    res.send('404 Not Found')
  })

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


