
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); 



const app = express();
const PORT = 5000; 

const cors = require('cors');
app.use(cors()); // This enables CORS for all routes by default



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoURI = "mongodb://localhost:27017/honeymoon_booking";


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  destination: { type: String, required: true },
});


const Booking = mongoose.model('Booking', bookingSchema,'book');


app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, destination } = req.body;

   
    const newBooking = new Booking({ name, email, destination });
    await newBooking.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ message: "An error occurred while submitting the form." });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
