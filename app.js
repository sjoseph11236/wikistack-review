// import the express module
const express = require('express');
const app = express();

const PORT = 1337;

// Use the listen method to access the port. 
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
})


//