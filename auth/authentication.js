const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../helpers/users-model')
const secrets = require('../config/secrets')


router.get('/', (req, res) => {
    res.status(200).send("User is running...")
})


router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    Users.add({ username, email, password: bcrypt.hashSync(password, 8) })
        .then(id => {
          res.status(201).json({ message: "User registered", id });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: "Error registering user" });
        });
});


router.post('/login', (req, res) => {
    const {username, email, password} = req.body
    Users.findByUsername(username)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)
                res.status(200).json({Message: "You successfully logged in", username, email, token})
            } else {
                  res.status(401).json({message: "The credentials that you've provided are invalid"})
              }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})


function generateToken(user){
    const payload = {
        username: user.username,
        email: user.email
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.environment, options)
}


module.exports = router