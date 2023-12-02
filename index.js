const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => 
{
    console.log('hello world!')
    res.send('hello earth!')
})

app.get('/hello/greet/:name', (req, res) => {
    res.send({
        msg: `Why hello there ${req.params.name}!`
})
})

app.get('/five', (req, res) => {
    res.send(
        [1, 2, 3, 4, 5]
    )
})


//fruit calls
// const fruitsArray = ['banana', 'orange', 'apple', 'peach', 'mango']
// app.get('/fruits', (req, res) => {
//     res.send(fruitsArray)
// })

// app.get('/fruits/:name', (req, res) => {
//     let fruitsArray = ['banana', 'orange', 'apple', 'peach', 'mango']
//     res.send({
//         msg: `${req.params.name}`
//     })
//   })

//veggie calls
const veggieArray =  ['lettuce', 'onion', 'bokchoy', 'parsnip', 'asparagus']
app.get('/veggies', (req, res) => {
    res.send(veggieArray)
})

app.get('/veggies/:name', (req, res) => {
    let veggieArray =  ['lettuce', 'onion', 'bokchoy', 'parsnip', 'asparagus']
    res.send({
        msg: `${req.params.name}`
    })
  })

//first attempt at BONUS
// app.get('/fruits/sort', (req, res) => {
//     fruitsArray.sort((a, b) => a - b)
//     res.send( `fruits sorted: ${req.params.sort}`
//     )
// })


const fruitArray =  ['banana', 'orange', 'apple', 'peach', 'mango']
app.get('/fruits/:name', (req, res) => {
    if(req.params.name == 'sort') {
        let sortedFruits = fruitArray.sort()
        console.log(sortedFruits)
        res.send(sortedFruits)
    }
})