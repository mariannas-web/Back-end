const router = require('express').Router()
const undergroundFeed = require('../mint.json')
const hedge = require('../zerohedge.json')


//-----------------Mint Press News-------------------------------//

router.get('/mint', (req, res) => {
    res.status(200).json({cat: 'james'})
})



module.exports = router 