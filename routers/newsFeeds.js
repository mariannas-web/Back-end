const router = require('express').Router()
const undergroundFeed = require('../mint.json')
const hedge = require('../zerohedge.json')


//-----------------Mint Press News-------------------------------//

router.get('/mint', (req, res) => {
    res.status(200).json(undergroundFeed)
})

//------------------Zero Hedge-----------------------------------//

router.get('/zerohedge', (req, res) => {
    res.status(200).json(hedge)
})

//-----------------the intercept---------------------------------//

router.get('/intercept', (req, res) => {
    res.status(200).json(mint)
})

//---------------------------------------------------------------//


module.exports = router 