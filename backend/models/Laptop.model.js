const mongoose = require("mongoose");

const laptopSchema = mongoose.Schema({
    price: Number,
    currency: {type: String, required: true},
    rating: Number,
    title: {type: String, required: true},
    image: {type: String, required: true},
    quantity: {type: String, required: true},
    status:Boolean,

})

const LaptopModel = mongoose.model("laptop", laptopSchema);

module.exports = {LaptopModel};