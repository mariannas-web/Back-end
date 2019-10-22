const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
    let browser = await puppeteer.launch()
    let page = await browser.newPage()
    let newsUrl = 'https://www.zerohedge.com/'

    await page.goto(newsUrl, { waituntil: 'networkidle2'}).catch(error => {console.log(error)})
 
    let data = await page.evaluate(() => {
        let articles = []

        //--------------------mint press 1------------------------------------------------------------//
        let image = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > section[class="teaser-content"] > div > div > a > picture > img')[1].src
        let title = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > h2[class="teaser-title"]')[1].innerText  
        let teaser = document.querySelectorAll('div[class="teaser-text"] > div[class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"]')[4].innerText 
        let link = 'https://www.zerohedge.com/'
        let source = 'Zero Hedge'
        let zeroHedge = {
            title: title, 
            image: image, 
            teaser: teaser, 
            link: link, 
            source: source}
        //------------------mint press 2 ------------------------------------------------------------//

        let image1 = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > section[class="teaser-content"] > div > div > a > picture > img')[0].src
        let title1 = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > h2[class="teaser-title"]')[0].innerText  
        let teaser1 = document.querySelectorAll('div[class="teaser-text"] > div[class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"]')[3].innerText 
        let link1 = 'https://www.zerohedge.com/'
        let zeroHedge1 = {
            title: title1, 
            image: image1, 
            teaser: teaser1, 
            link: link1, 
            source: source
        }

        //------------------------------------------------------------------------------------------//

        let image2 = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > section[class="teaser-content"] > div > div > a > picture > img')[2].src
        let title2 = document.querySelectorAll('article[class="node node--type-article node--view-mode-teaser"] > h2[class="teaser-title"]')[2].innerText  
        let teaser2 = document.querySelectorAll('div[class="teaser-text"] > div[class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"]')[5].innerText 
        let link2 = 'https://www.zerohedge.com/'
        let zeroHedge2 = {
            title: title2, 
            image: image2, 
            teaser: teaser2, 
            link: link2, 
            source: source}
        //------------------------------------------------------------------------------------------//

        articles.push({
            zeroHedge,
            zeroHedge1,
            zeroHedge2
        })
        return {
            articles
        }
    })

    browser.close()
    return data
}

scrape().then((value) => {
    fs.writeFile('./zerohedge.json', JSON.stringify(value, null, 4),error => {console.log('there was an error', error)})
})
