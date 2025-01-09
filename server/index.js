// IMPORTS
const express = require("express"); //express simplifies process to build web servers
const mongoose = require("mongoose"); //equivalent of SQLalchemy - helps interact with MongoDB database
const dotenv = require("dotenv"); //need dotenv to import contents of .env fil DUH 
const Subscriber = require("./models/Newsletter.js")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const moment = require("moment")
const crypto = require("crypto")
const cors = require('cors')

dotenv.config(); //command to load contents of .env

const app = express(); //initializes express ('creates an instance of the express app')

//MIDDLEWARE
app.use(express.json()); // Parse JSON requests - allows your server to understanf data sent in JSON format from the front end
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}))

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
 
  
//BEGIN NEWSLETTER TUTORIAL!!!
//NODEMAILER CONFIGURATION
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "unseriousartdev@gmail.com",
    pass: process.env.GMAIL_APP_PASS
  }
})

// POST REQUEST
app.post("/subscribe", async (req, res) => {
  try {
    const { email, name } = req.body;
    const subscriber = new Subscriber({ email, name })

    //generate confirmation token and expiry timestamp
    const confirmationToken = crypto.randomBytes(16).toString("hex");
    const tokenExpiry = moment().add(10, "minutes").toDate() //front end todo - tell users confirmation link will expire in 10 minutes
    subscriber.confirmationToken = confirmationToken
    subscriber.tokenExpiry = tokenExpiry
    
    await subscriber.save();

    // send confirmation email with confirmation link
    const confirmationLink = `http://localhost:5555/confirm?token=${confirmationToken}`
    const mailOptions = {
      from: 'Someone Unserious <3',
      to: email,
      subject: "Are you real?",
      text: `Dear ${name}, \n\n 
            Just checking that you gave me a real email :) \n
            Please confirm by clicking the link below: \n
            ${confirmationLink} \n\n
            Ty,
            Unserious <3`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending confirmation email:', error)
      } else {
        console.log(`Confirmation sent:`, info.response)
      }
    })

    res.status(201).send("Email successfully sent!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET REQUEST - subscription confirmation route\
app.get('/confirm', async (req, res) => {
  try {
    const { token } = req.query
    const subscriber = await Subscriber.findOne({ confirmationToken: token})

    if (!subscriber || subscriber.tokenExpiry < new Date()) {
      return res.status(404).send("Confirmation token is invalid or expired")
    }

    //update subscriber's confirmed status
    subscriber.confirmed = true
    subscriber.confirmationToken = undefined
    subscriber.tokenExpiry = undefined
    await subscriber.save()

    res.send("Email confirmed successfully!")
  } catch (error) {
    res.status(400). send(error.message)
  }
})

// RUN SERVER
const PORT = process.env.PORT || 5555; //this first checks is a port is specified in the .env file and uses that, otherwise it uses the default 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



