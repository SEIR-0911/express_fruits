const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));

app.get("/", (req, res) => {
    res.send("Hello! Welcome to Frute APP.");
});

app.get(`/greet/:username`, (req, res) => {
    console.log(`hello ${req.params.username}!`);
    res.send(`hello ${req.params.username}!`);

});
//GET /five should return an array of the numbers from 1-5
const myNum =[1,2,3,4,5]

app.get('/five', (req, res) => {
    console.log("",);
    res.send(`hello ${req.params}!`);
}) 
    


app.get('/fruits/', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method 
    console.log(`hello ${req.params}!`);
    res.send(`hello ${req.params}!`);
})
  
