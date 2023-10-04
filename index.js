const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));

app.get(`/greet/:name`, (req, res) => {
    console.log('hello There!');
    res.send(`hello there, ${req.params.name} `);

});