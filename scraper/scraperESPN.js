const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
    let browser = await puppeteer.launch()
    let page = await browser.newPage()
    let newsUrl = 'http://player.listenlive.co/59611'

    await page.goto(newsUrl, { waituntil: 'networkidle2'}).catch(error => {console.log(error)})
 

    page.evaluate( () => { 
    let cat = document.querySelector('nav[class="menu"] > ul[id="controls"] > li > a[id="play-button"] > span > i[class="fa fa-play"]')


    cat.click()
})
.catch(err => { console.log("there was an error")})

}

scrape()

