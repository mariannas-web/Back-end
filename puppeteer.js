const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
    let browser = await puppeteer.launch()
    let page = await browser.newPage()
    let newsUrl = 'https://www.mintpressnews.com/'

    await page.goto(newsUrl, { waituntil: 'networkidle2'}).catch(error => {console.log(error)})
 
    let data = await page.evaluate(() => {
        let articles = []

        //--------------------mint press 1------------------------------------------------------------//
        let image = document.querySelector('div[class="featured-post-image"] > a >img').src
        let title = document.querySelector('div[class="featured-post-text"] > h1 > a').innerText 
        let teaser = document.querySelector('div[class="featured-post-text"] > h2 > p').innerText
        let link = 'https://www.mintpressnews.com/'
        let source = 'Mint Press News'
        let mintPress = {
            title: title, 
            image: image, 
            teaser: teaser, 
            link: link, 
            source: source}
        //------------------mint press 2 ------------------------------------------------------------//
        let image2 = document.querySelector('div[class="site-inner"] > div[class="featured-post"] > div[class="featured-post-image"] > a > img').src
        let title2 = document.querySelector('div[class="featured-post-text first-featured-post-text black-box"] > h1 > a').innerText 
        let teaser2 = document.querySelector('div[class="featured-post-text first-featured-post-text black-box"] > h2 > p').innerText
        let link2 = document.querySelector('div[class="featured-post"] > div[class="featured-post-image"] > a').href
        let mintPress2 = {
            image: image2,
            title: title2,
            source: source,
            teaser: teaser2,
            link: link2
        }
        //-------------------------------------------------------------------------------------------//
        articles.push({
            mintPress,
            mintPress2
        })
        return {
            articles
        }
    })

    browser.close()
    return data
}

scrape().then((value) => {
    fs.writeFile('./mint.json', JSON.stringify(value, null, 4),error => {console.log('there was an error', error)})
})

 



