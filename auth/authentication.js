const express = require('express')
const db = require('../data/dbConfig')

const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).send("User is running...")
})




module.exports = router