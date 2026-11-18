const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "food", "clothing", "furniture", "other"]
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },

    quantity: {
        type: Number,
        required: true,
        min: 0
    }
},{timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product