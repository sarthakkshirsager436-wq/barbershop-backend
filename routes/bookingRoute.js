const express= require("express");

const router=express.Router();

const {bookedSlots}= require("../controllers/bookingController");
const {createBooking}=require("../controllers/bookingController")

router.post("/bookings",bookedSlots);
router.post("/createbookings",createBooking);

module.exports = router;