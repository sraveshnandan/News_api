const router = require('express').Router();
const cheerio = require('cheerio');
const product_data = require('../models/product')
const axios = require('axios');
const { response } = require('express');
const url = process.env.MOVIE_URL;
const scrapedData = [];
router.get('/scrape/movies_review', async (req, res) => {
    axios.get(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);


            const targetClass = '.jsx-1830619405.mlw_col';
            const scrapedData = [];

            $(targetClass).each((index, element) => {
                const title = $(element).find('.jsx-1830619405.mv_name').contents().first().text().trim();
                const actors = $(element).find('.jsx-1830619405.mlw_cast').text().trim();
                const category = $(element).find('.jsx-1830619405.mlw_list:nth-child(1) li').text().trim();
                const img = $(element).find('.jsx-1830619405.mlw_col_l img').attr('data-src');

                const liTags = [];
                $(element).find('.jsx-1830619405.mlw_list li').each((i, liElement) => {
                    const liText = $(liElement).text().trim();
                    liTags.push(liText);
                });

                scrapedData.push({ title, actors, category, img, liTags });
            });

            res.json(scrapedData);
        })




})


module.exports = router;