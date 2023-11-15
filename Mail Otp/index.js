const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const emailRouter=require('./Mailrouter');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/email_otp', emailRouter);



app.listen(5000, () => {
  console.log("started");
});