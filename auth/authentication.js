const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../helpers/users-model')

const secrets = require('../config/secrets')


router.get('/', (req, res) => {
    res.status(200).send("User is running...")
})


router.post('/register', (req, res) => {
    let user = req.body
    let hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user).then(savedInfo => {
        res.status(201).json(savedInfo)
    })
    .catch(error => { 
        res.status(500).json(error)
    })
})


router.post('/login', (req, res) => {
    let {username, password} = req.body

    Users.findBy({username})
      .first()
      .then(user => {
          if(user && bcrypt.compareSync(password, user.password)){
              const token = generateToken(user)
              res.status(201).json({token})
          } else {
              res.status(401).json({message: "The credentials that you've provided are invalid"})
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})


function generateToken(user){
    const payload = {
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = router