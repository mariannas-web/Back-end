const router = require('express').Router()
const userPost = require('../helpers/userPost-model')
const db = require('../data/dbConfig')


router.get('/', (req, res) => {
    userPost.get().then(response => {
        res.status(200).json(response)
    })
    .catch(error => { 
        res.status(500).json({error: "There was an error retrieving your data"})
    })
})


router.get('/:id', (req, res) => {
    const {id} = req.params
    userPost.getById(id).then(response => {
        if(response){
            res.status(200).json(response)  
        } else {
              res.status(404).json({error: "Your request does not exist"})
          }
    })
    .catch(error => { 
        res.status(500).json({error: "There was an error retrieving your data"})
    })
})


router.post('/', (req, res) => {
    const body = req.body
    db('userPost').insert(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting your message"})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('userPost').where({id}).del()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "There was an error deleting the user"})
    })
})


module.exports = router