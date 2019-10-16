const router = require('express').Router()
const userFavs = require('../helpers/userFavs-model')
const db = require('../data/dbConfig')


router.get('/', (req, res) => {
    userFavs.get().then(response => {
        res.status(200).json(response)
    })
    .catch(error => { 
        res.status(500).json({error: "There was an error retrieving your data"})
    })
})


router.get('/:id', (req, res) => {
    const {id} = req.params
    userFavs.getById(id).then(response => {
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
    db('userFavs').insert(body).then(response => {
        res.status(200).json(response)
    })

})


module.exports = router