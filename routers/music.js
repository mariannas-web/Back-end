const router = require('express').Router()
const db = require('../data/dbConfig')


router.get('/', (req, res) => {
    db('music').then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500)
          .json({error: "We've encountered an error loading the music section"})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db('music').where({id}).then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500)
          .json({error: "We've encountered an error loading the user"})   
    }) 
})

router.post('/', (req, res) => {
    const body = req.body
    db('music').insert(body).then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500)
          .json({error: "There was an error posting your content"})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('music').where({id}).del()
      .then(response => {
          res.status(201).json(response)
      })
      .catch(error => {
        res.status(500)
          .json({error: "There was an error deleting this post"})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body
    db('music').where({id}).update(body)
      .then(response => {
          res.status(201).json(response)
      })
      .catch(error => {
        res.status(500)
          .json({error: "Unable to update the post"})
    })
})



module.exports = router 