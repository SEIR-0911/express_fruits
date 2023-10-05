### SEIR 0911

# 🍍🍇🍐 Express Fruits 🍓🍌🥭

![fruit](https://s3.amazonaws.com/secretsaucefiles/photos/images/000/104/044/large/fruit-dancing-gif.gif?1485312342)

## Overview

It's time to get some practice setting up an express server and writing a few routes.  Feel free to test these routes either with the browser's navbar, a small `node` script using `axios` or a toy react app with connected with `axios`. We'll also be working with the data array in `fruits.js` to practice our routes.

## Getting Started

- `Fork` and `clone` this repo
- `cd` into the repo
- `touch index.js` to create an entry point for your server
- Run `npm init -y` to initialize your project as a `Node.js` project
- Install express with `npm i express`
- We'll install `nodemon` with `npm i nodemon --save-dev` to save it as a dev dependency
- Add `start` and `dev` scripts to `package.json` that will run on your server's entry point:
	```js
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js"
	}
	```

## Instructions
### Set up an Express server

Let's write the boilerplate for an express server:

- First, import `express` by requiring it at the top of `index.js` with:
	```js
	const express = require('express');
	```

- Go ahead and define a `PORT` constant variable: 
	```js
	const PORT = process.env.PORT || 3001;
	```
- Init an `app` instance below your initial imports:
	```js
	const app = express();
	```
- You may want to create some space between your app instance and the step below since we'll be writing routes in between them shortly.
- Finally, bind the app to a port with `app.listen()` at the bottom of the file:
	```js
	app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
	```

Now start the server from the terminal with `npm run dev`. If all goes well, you should see the message from the console log above in the console.  _Don't stop the server until you are done writing code or unless you just want to restart it._ If you save the `index.js` file the server should automatically re-load the changes and restart since we're using `nodemon` in our `dev` script in `package.json`.

___
### Adding Basic Routes

Start off by defining a simple `GET` route:

```js
app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')

})

    // app.get('/hello', (req, res) => {
    //     console.log('hello world!')
    //     res.send('hello world')
    // })
    // ```

#### `/greet/:name`
`GET` `/greet/:name` should return a greeting with the supplied name, e.g., `'Why hello there, <name>!'`

Recall you can access the URL parameters with `req.params`


    <!-- app.get('/greet/:name', (req, res) => {
        res.send({
            Greeting: `Why hello there, ${req.params.name}`
        })
    }) -->


#### `/five`
`GET` `/five` should return an array of the numbers from 1-5

Remember that you can create variables above your response

<!-- 
  app.get('/five', (req, res) => 
      res.send(

          [1, 2, 3, 4, 5])
  ) -->





### Fruit Routes
#### `/fruits`

`GET` `/fruits` should return an array of fruits that you create.

Let's add a route that returns an array of fruits when we access the route

```js
app.get('/fruits', (req, res) => {
  //your code here 
  res.send()
})
```


#### `/fruits/:name`

Now let's add a route that takes a route parameter `name` and retrieves the fruit that matches the supplied name. 
```js
app.get('/fruits/:name', (req, res) => {
  //your code here
  // HINT - you can use a higher-order array method 
})
```


  <!-- app.get('/fruits/:name', (req, res) => {
          fruitsData = [
              { 'name': 'Lindsay', 'fruit': 'apple' },
              { 'name': 'John', 'fruit':'orange' },
              { 'name': 'Paul', 'fruit':'mango' },
              { 'name': 'Mark', 'fruit':  'pineapple' },
              { 'name': 'George', 'fruit': 'strawberry' }
          ]
      const targetFruitName = req.params.name
      const fruitMatch = fruitsData.find(fruit => fruit.name === targetFruitName)

      if (fruitMatch){
          res.send({fruit: fruitMatch.fruit})
      } else {
          res.send('No fruit matches this name...☹️')
      } 
    -->






#### `/veggies`

With a working route to show an array of fruits, and an individual fruit, lets take this same concept and make another route that returns an array of vegetables, then try to create a route for the individual ones

Note : Tomato, pepper, avocado, and cucumber are all fruits, not vegetables. If you put any of these, or other seed-bearing produce into your veggies link, you will not receive credit for this assignment. I'm sorry, but your instructor is just kind of a jerk sometimes


    <!-- app.get('/veggies/:veggieName?', (req, res) => {
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
        })-->

___

## Bonus 

`GET` `/fruits/sort` should return the fruits array sorted alphabetically using [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). 

```js
app.get('/fruits/sort', (req, res) => {
  // implement sort

  res.send()
})
```

<details><summary><sup>Secret Bonus</sup></summary>
	
   <br />
	
   What if we wanted to add a catch-all route to our express app so some crazy fruit ninja doesn't go breaking things?
   
   To prepare for that, let's add this quick route at the **very bottom** of our routes, just above `app.listen()`
   
   ```js
   app.get('*', (req, res) => {
     res.send('404 Not Found')
   })
   ```
   
   A couple important things to note:
   - The `*` used for a route will cover _any_ route request made to our server, meaning that it will respond with this 404 message for any URL param chained on to `http://localhost:3001`
   - That being said, since it will respond to _any_ route, we put it at the **bottom** of our server, so our other routes are still accessible while routes that don't exist will be sent to an error message
   - Use it wisely if you choose to

   ![great power](https://31.media.tumblr.com/tumblr_lqb3ag4MPc1r1edcbo1_500.gif)

</details>

## Resources
- [Additional Reading on req.params](https://coursework.vschool.io/express-params-and-query/)



