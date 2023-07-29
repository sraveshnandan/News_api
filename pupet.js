const puppeteer = require('puppeteer');

async function scrapeData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.news18.com/business/'); // Replace this with the actual URL of the website you want to scrape

    const scrapedData = [];

    async function extractData() {
        const data = await page.evaluate(() => {
            const dataArr = [];
            const targetClass = '.jsx-1374841737.blog_list_row'; // Replace this with the class of the container that holds the data you want to scrape

            // Implement your data extraction logic here, similar to the previous examples
            // For example:
            const items = document.querySelectorAll(targetClass);
            items.forEach((item) => {
                const title = item.querySelector('.jsx-1374841737.blog_title h4').textContent.trim();
                // const actors = item.querySelector('.mlw_cast').textContent.trim();
                // const category = item.querySelector('.mlw_list:nth-child(1) li').textContent.trim();
                // const duration = item.querySelector('.mlw_list:nth-child(2) li').textContent.trim();

                dataArr.push({ title });
            });

            return dataArr;
        });

        scrapedData.push(...data);
    }

    // Load more data by clicking the "Load More" button repeatedly until it's no longer available
    async function loadMoreData() {
        try {
            await page.waitForSelector('.jsx-1374841737 Load_more'); // Replace this with the selector for the "Load More" button
            await page.click('.jsx-1374841737');
            await page.waitForTimeout(2000); // Wait for a few seconds to allow the new data to load (adjust the time as needed)
            await extractData();
            await loadMoreData(); // Recursively load more data until the button is no longer available
        } catch (error) {
            // The "Load More" button is no longer available or there's an error
            console.log('Finished loading data.');
        }
    }

    // Start scraping by extracting the initial data on the page
    await extractData();
    // Load more data if the "Load More" button is available
    await loadMoreData();

    console.log(scrapedData);

    await browser.close();
}

scrapeData();
