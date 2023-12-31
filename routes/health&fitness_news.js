const router = require('express').Router();
const cheerio = require('cheerio');
const product_data = require('../models/schema')
const axios = require('axios');
const { response } = require('express');
const url = process.env.HEALTH_NEWS;

router.get('/scrape/health&fitness', async (req, res) => {
    axios.get(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            const scrapedData = [];
            const targetClass = '.jsx-1374841737.blog_list_row';

            $(targetClass).each(async (index, element) => {
                const title = $(element).find('.jsx-1374841737.blog_title h4').text().trim();
                const url = $(element).find('a').attr('href');
                const imgUrl = $(element).find('img').attr('data-src');
                const updatedtime = $(element).find('sub').text().trim();

                scrapedData.push({ title, url, imgUrl, updatedtime });
            });

            res.json(scrapedData)
        })




})


module.exports = router;