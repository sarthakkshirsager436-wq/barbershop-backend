const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

    shopName:{
        type:String,
        required:true
    },

    owner:{
        type:String
    },

    location:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        enum:["Male","Female","Kids"]
    },

    address:String,

    phone:String,

    openingTime:String,

    closingTime:String,

    rating:Number

});

module.exports = mongoose.model("Shop", shopSchema);