const router = require('express').Router()
const db = require('../data/dbConfig')


router.get('/', (req, res) => {
    db('contact').then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error getting user messages"})
    })
})


router.post('/', (req, res) => {
    const body = req.body
    db('contact').insert(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting the content", error})
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('contact').where({id}).del()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error deleting the post", error})
    })
})




module.exports = router 