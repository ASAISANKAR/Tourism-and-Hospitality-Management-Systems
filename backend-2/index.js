const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router=express.Router();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const MONGO_URI = 'mongodb+srv://saisankar:system@cluster0.gv6neug.mongodb.net/AdminLogin'; 
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});  

  



const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to DB");
});

// Add this route to fetch booking data
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await User1.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add this route to fetch registration data
app.get("/registration", async (req, res) => {
  try {
    const registrations = await User.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


//user schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("Registration", userSchema);


//routes routes
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "login success"});
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not registered");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});



app.post("/Register", async (req, res) => {
  console.log("");
console.log("Registrations Details");
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "user already exists" });
      console.log("user already exists");
    } else {
      const newUser = new User({firstName, lastName, email, password });
      await newUser.save();
      console.log(newUser);
      res.send({ message: "successful" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});


//BookingPage Storing in Database


//user schema

const userSchema1=new mongoose.Schema({
  name:String,
  email:String,
  phoneNumber:String,
});

const User1=mongoose.model("Booking",userSchema1);

//routes routes


app.post("/Booking", async (req, res) => {
  console.log("");
  console.log("Booking Details");
  console.log(req.body);
  const { name,email,phoneNumber } = req.body;
  try {
      
      const newUser = new User1({name, email,phoneNumber  });
      await newUser.save();
      console.log(newUser);
      res.send({ message: "successful" });
    
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//feedback db


const userSchema2=new mongoose.Schema({
  experience:String,
  suggestion:String,
  comments:String,
});

const User2=mongoose.model("FeedBack",userSchema2);

//routes routes


app.post("/Feedback", async (req, res) => {
  console.log("");
  console.log("Feedback");
  console.log(req.body);
  const { experience,suggestion,comments } = req.body;
  try {
      
      const newUser = new User2({ experience,suggestion,comments});
      await newUser.save();
      console.log(newUser);
      res.send({ message: "successful" });
    
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//About Us Registration
// Update the userSchema3 to include the required fields
const userSchema3 = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  numPeople: Number,
});

const User3 = mongoose.model("About-Us-Registration", userSchema3);

// Update the /DarshanRegistration route handler
app.post("/DarshanRegistration", async (req, res) => {
  console.log("");
  console.log("About Us Registration");
  console.log(req.body);
  const { name, email, phone, date, numPeople } = req.body;
  try {
    const newUser = new User3({ name, email, phone, date, numPeople });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.send({ message: "successful" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send(err.message);
  }
});

//Contact Us
const userSchema4 = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  option: String,
  message:String,
});

const User4 = mongoose.model("About-Us-Registration", userSchema3);

// Update the /DarshanRegistration route handler
app.post("/contact", async (req, res) => {
  console.log("");
  console.log("About Us Registration");
  console.log(req.body);
  const { name,email,phone,option,message} = req.body;
  try {
    const newUser = new User3({ name, email, phone, option,message });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.send({ message: "successful" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send(err.message);
  }
});




app.listen(6969, () => {
  console.log("started");
});