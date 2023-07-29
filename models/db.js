const mongoose = require('mongoose');
//This function connects the server to the database .
const connectToDb = () => {
    const connectionPrams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(process.env.DB_URL, connectionPrams)
        console.log(`Connected to the database.`);
    } catch (error) {
        console.log(`Could not connect to the database because${error}`)
    }
}
module.exports = connectToDb;