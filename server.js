const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const shops=require("./routes/shops");
const bookings=require("./routes/bookingRoute");


const connectDB = require("./config/db");

const app = express();
app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Barber Booking Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/shops",shops);
app.use("/api/available",bookings);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});