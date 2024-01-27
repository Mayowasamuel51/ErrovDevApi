const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require('dotenv')
const cors = require('cors')
const configB = require('dotenv').config()
const urlroutes = require('../routes/urlroutes')


const bodyParser = require("body-parser");
app.use(bodyParser.json()); // a

app.use(cors())

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Content-Allow-Orgin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,DELTE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => console.log("database connected  ready to collect data!!!"))
  .catch((err) => console.log(err.message));



app.use('/api', urlroutes)





app.use((error , req ,res  ,next)=>{
  
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message, error: "server error" });
  // console.log(error.message);
  // console.log(error.stack)
})

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log("SERVER IS RUNNING   " + port);
});

module.exports = app;
