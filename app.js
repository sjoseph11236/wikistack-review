// import the express module.
const express = require('express');
// Create an express application instance
const app = express();
// A module to log middleware
const morgan = require('morgan');
const path = require('path');
const { Page, User } = require('./models');

// // verify the connection to the database
// db.authenticate().then(() => { 
//   console.log('connected to database');
// })
// const bodyParser = require('body-parser');

// middleware that allows us to read the body
// app.use(bodyParser.urlencoded({extended: false}));

// or

// use the logging middleware for HTTP request called morgan
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"./public")));

// parases request with type json
app.use(express.json());
// parases request with type irlencoded
app.use(express.urlencoded({extended: false}));

// identify the target port
const PORT = 3000;

// Create a get route to root patth that responds with hello world.
app.get('/', (req, res ) => {
  res.send('Hello World1134123413');
});



// Use the listen method to access the port. 
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});


//