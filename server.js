require('dotenv').config() // Loading all environment variables
//Importing Modules
const express = require('express');
const homeRoute = require('./routes/home');
const latest_news = require('./routes/latest_news');
const tech_news = require('./routes/tech_news');
const sports_news = require('./routes/sports_news');
const health_fitness = require('./routes/health&fitness_news');
const movie_review = require('./routes/movie_reviews');
const auto_news = require('./routes/automobile_news');
const business_news = require('./routes/business_news');
const connectToDb = require('./models/db');
const app = express();
const pre = '/api/v1';
const port = process.env.PORT || 8000;
//Function to connect  the server to the database
connectToDb() /* I've just initilised the mongodb database in this project because in future I may use it and also reminds me to use it .*/
//Express middlewares to handle requests
app.use(express.json());
app.use(pre, homeRoute);
app.use(pre, latest_news);
app.use(pre, tech_news);
app.use(pre, sports_news);
app.use(pre, health_fitness);
app.use(pre, business_news);
app.use(pre, movie_review);
app.use(pre, auto_news);
//Starting The Server 
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
})