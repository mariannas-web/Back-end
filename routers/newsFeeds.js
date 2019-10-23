const router = require('express').Router()
const undergroundFeed = require('../scraper/json/mint.json')


//-----------------Mint Press News-------------------------------//

router.get('/mint', (req, res) => {
    res.status(200).json(undergroundFeed)
})



module.exports = router 