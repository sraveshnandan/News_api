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

const product_data = new mongoose.model('product_data', productShema);
module.exports = product_data;