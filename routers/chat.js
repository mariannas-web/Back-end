const router = require('express').Router()
const Post = require('../helpers/chat-model')
const db = require('../data/dbConfig')

router.get('/', (req, res) => {
    db('chat').then(response => {
       res.status(200).json(response) 
    })
    .catch(error => { res.status(500).json({error: "there was an error retrieving the chat post"})
    })
})

router.post('/', (req, res) => {
    db('chat').insert({id}).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(401).json({error: "invalid submission"})
        }
    })
    .catch(error => { res.status(500).json({error: "there was an error posting your comment"})
    })
})



module.exports = router