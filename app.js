// import the express module.
const express = require('express');
// Create an express application instance
const app = express();
// A module to log middleware
const morgan = require('morgan');
// const bodyParser = require('body-parser');

// middleware that allows us to read the body
// app.use(bodyParser.urlencoded({extended: false}));

// or

// parases request with type json
app.use(express.json());
// parases request with type irlencoded
app.use(express.urlencoded());
// use the logging middleware for HTTP request called morgan
app.use(morgan('dev'));
// identify the target port
const PORT = 1337;

// Create a get route to root patth that responds with hello world.
app.get('/', (req, res ) => {
  res.send('Hello World');
});



// Use the listen method to access the port. 
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});


//