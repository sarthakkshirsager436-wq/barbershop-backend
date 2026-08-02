const Shop = require("../models/Shops");

exports.searchShop = async (req, res) => {

    try {

        const { location, gender } = req.body;

        console.log(req.body);


        if (!location || !gender) {
            return res.status(400).json({
                message: "Location and gender are required"
            });
        }

        const shops = await Shop.find({ location, gender });

        if (shops.length === 0) {
            return res.status(404).json({
                message: "No shops found"
            });
        }

        res.status(200).json(shops);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};