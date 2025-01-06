// IMPORTS
const express = require("express"); //express simplifies process to build web servers
const mongoose = require("mongoose"); //equivalent of SQLalchemy - helps interact with MongoDB database
const dotenv = require("dotenv"); //need dotenv to import contents of .env fil DUH 

dotenv.config(); //command to load contents of .env

const app = express(); //initializes express ('creates an instance of the express app')
app.use(express.json()); // Parse JSON requests - allows your server to understanf data sent in JSON format from the front end


// CONNECT TO MONGODB 
// (+check and log is the connection is successful or fails)
mongoose.connect(process.env.MONGO_CONN)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// SERVER HOMEBASE 
// (just to check if it's working)
  app.get("/", (req, res) => { // res object is used to send response back to client, req object hold data about the incoming request
    res.send("Hello from the server!");
  });
  //example uses of req
  //req.query.var (gets var from the url) 
  //req.body (access data from request for example someone sends a form)
  //req.params.urlparam (access dynamic variables from the URL)
  
// RUN SERVER
  const PORT = process.env.PORT || 5555; //this first checks is a port is specified in the .env file and uses that, otherwise it uses the default 5000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  

