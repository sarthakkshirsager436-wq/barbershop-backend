const bookings = require("../models/Booking");

exports.createBooking = async (req, res) => {

    try {

        const { shopName, date, time } = req.body;

        // Check if slot is already booked
        const existingBooking = await bookings.findOne({
            shopName,
            date,
            time
        });

        if (existingBooking) {
            return res.status(400).json({
                message: "Slot already booked"
            });
        }

        

        const booking = new bookings({
    shopName: shopName.trim(),
    date,
    time
});

        // console.log("slots:", booking);

        await booking.save();

        res.status(201).json({
            message: "Booking successful"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.bookedSlots = async (req, res) => {
    try {
        // console.log(req.body);

        const { shopName, date } = req.body;

        //  console.log("shopName:", shopName);
        //  

        const slots = await bookings.find({
    shopName: shopName.trim(),
    date
});

        console.log("slots:", slots);

        return res.status(200).json(slots);

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message
        });
    }
};