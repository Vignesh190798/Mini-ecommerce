const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
},{timestamps: true})

const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel