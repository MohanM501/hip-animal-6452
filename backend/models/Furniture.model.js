const mongoose = require("mongoose");

const furnitureSchema = mongoose.Schema({
    price: Number,
    currency: {type: String, required: true},
    rating: Number,
    title: {type: String, required: true},
    image: {type: String, required: true},
    quantity: {type: String, required: true},
    status:Boolean,

})

const FurnitureModel = mongoose.model("furniture", furnitureSchema);

module.exports = {FurnitureModel};