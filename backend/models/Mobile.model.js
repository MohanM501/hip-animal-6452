const mongoose = require("mongoose");

const mobileSchema = mongoose.Schema({
    price: Number,
    currency: {type: String, required: true},
    rating: Number,
    title: {type: String, required: true},
    image: {type: String, required: true},
    quantity: {type: String, required: true},
    status:Boolean,

})

const MobileModel = mongoose.model("mobole", mobileSchema);

module.exports = {MobileModel};