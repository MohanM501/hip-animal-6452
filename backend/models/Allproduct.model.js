const mongoose = require("mongoose");

const allproductSchema = mongoose.Schema({
        price: Number,
        currency: {type: String, required: true},
        rating: Number,
        title: {type: String, required: true},
        image: {type: String, required: true},
        quantity: {type: String, required: true},
        status:Boolean,
        category: {type: String, required: true}
        }
    )

const AllproductModel = mongoose.model("products", allproductSchema);

module.exports = {AllproductModel};