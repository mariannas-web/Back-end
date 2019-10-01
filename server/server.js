require('dotenv').config()

const express = require('express')
const server = express()
const userRouter = require('../auth/authentication')

const cors = require('cors')
const helmet = require('helmet')


server.use(express.json())
server.use(cors())
server.use(helmet()) 

server.use('/api/user', userRouter)


server.get('/', (req, res) => {
    res.status(200).send("Mariannas Web Is Live")
})


module.exports = server