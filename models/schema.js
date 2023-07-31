//Product schema for storing the product data in the database 
const mongoose = require('mongoose');
const productShema = new mongoose.Schema({
    name: { type: String, },
    price: { type: Number, },
    imageUrl: { type: String, },
    description: { type: String, },
    category: { type: String, },
    source: { type: String, }
})
//Schema for movies data
const movieShema = new mongoose.Schema({
    name: { type: String, required: true },
    actors: { type: String, required: true },
    category: { type: String, required: true },
    baner: { type: String, required: true },
    restriction: { type: String, required: true },
    source: { type: String, required: true },
})

const product_data = new mongoose.model('product_data', productShema);
module.exports = product_data;