require('dotenv').config() // Loading all environment variables
//Importing Modules
const express = require('express');
const homeRoute = require('./routes/home');
const latest_news = require('./routes/latest_news');
const tech_news = require('./routes/tech_news');
const sports_news = require('./routes/sports_news');
const health_fitness = require('./routes/health&fitness_news');
const movie_review = require('./routes/movie_reviews')
const auto_news = require('./routes/automobile_news')
const business_news = require('./routes/business_news')

const app = express();
const connectToDb = require('./models/db')
const port = process.env.PORT || 8000;
//Function to connect to the database
connectToDb()
//Express middleware
app.use(express.json());
app.use('', homeRoute)
app.use('', latest_news)
app.use('', tech_news)
app.use('', sports_news)
app.use('', health_fitness)
app.use('', business_news)
app.use('', movie_review)
app.use('', auto_news)





//Starting The Server 
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`)
})