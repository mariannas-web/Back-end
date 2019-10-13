require('dotenv').config()

const express = require('express')
const server = express()
const auth = require('../auth/authentication')
const user = require('../helpers/users-router')
const postNewsRouter = require('../routers/postNews')

const cors = require('cors')
const helmet = require('helmet')


server.use(express.json())
server.use(cors())
server.use(helmet()) 

server.use('/api/auth', auth)
server.use('/api/user', user)
server.use('/api/post', postNewsRouter)


server.get('/', (req, res) => {
    res.status(200).send("Mariannas Web Is Live")
})


module.exports = server