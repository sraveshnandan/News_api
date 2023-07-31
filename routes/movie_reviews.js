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
                const category = $(element).find('.jsx-1830619405.mlw_list li:nth-child(2)').text().trim();
                const img = $(element).find('.jsx-1830619405.mlw_col_l img').attr('data-src');
                const sourceUrl = $(element).find('button').attr('data-url')
                const restriction = $(element).find('.restriction').text().trim();

                const details = [];
                $(element).find('.jsx-1830619405.mlw_list li').each((i, liElement) => {
                    const liText = $(liElement).text().trim();
                    details.push(liText);
                });

                scrapedData.push({ title, actors, category, img, details, source, restriction });
            });

            res.json(scrapedData);
        })




})


module.exports = router;