const mongoose = require('mongoose');

const discuntSchema = mongoose.Schema({
    code: {type: String, required: true},
    discriptions: {type: String, required: true},
    amount: Number,
    status: Boolean
})

const DiscuntModel = mongoose.model('Discunt', discuntSchema)

module.exports = {DiscuntModel}

