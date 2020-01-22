// import the express module.
const express = require('express');
// Create an express application
const app = express();

// identify the target port
const PORT = 1337;
// Create a get route that responds with hello world.
app.get('/', (req, res ) => {
  res.send('Hello World');
})
// Use the listen method to access the port. 
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})


//