const router = require('express').Router()
const Users = require('../helpers/users-model')
const UserPost = require('../helpers/userFavs-model')
const restricted = require('../auth/restricted-middleware')



router.get('/', (req, res) => {
    Users.find().then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving the users', error})
    })
})

router.get('/:id',  (req, res) => {
    const {id} = req.params
    Users.findById(id).then(response => {
        if(response){
            res.status(200).json(response)    
        } else {
            res.status(404).json({error: 'Id does not exist'})
          }
    })
    .catch(err => res.send(err))
})


router.post('/', (req, res) => {
    const body = req.body
    Users.add(body).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Invalid Submission"})
        }
    })
})


router.get('/:id/userPost', (req, res) => {
    const { id } = req.params
    UserPost.getByUserId(id)
        .then( response => {
            if(response){
                res.status(200).json(response)
            } else {
                res.status(404).end()
            }
        })
})


router.post('/:user_id/userPost', (req, res) => {
    const {user_id} = req.params
    const {title, teaser, link, youTubeVideo} = req.body
    UserPost.add({title, teaser, link, youTubeVideo, user_id: parseInt(user_id, 10)})  
        .then(response => {
            if(response){
                res.status(200).json(response)   
            } else {
                res.status(404).json({error: "Invalid Entry"})
            }   
        })
        .catch(error => {res.status(500).json({error: "There was an error posting your content"})})
})


module.exports = router