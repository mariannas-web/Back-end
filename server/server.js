require('dotenv').config()

const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')

server.use(express.json())
server.use(cors())
server.use(helmet()) 

const auth = require('../auth/authentication')
server.use('/api/auth', auth)

const user = require('../routers/user')
server.use('/api/user', user)

const postNewsRouter = require('../routers/postNews')
server.use('/api/post', postNewsRouter)

const userPostRouter = require('../routers/userFavs.js')
server.use('/api/userPost', userPostRouter)

const chatRouter = require('../routers/chat.js')
server.use('/api/chat', chatRouter)

const newsFeedRouter = require('../routers/newsFeeds.js')
server.use('/api/feed', newsFeedRouter)


server.get('/', (req, res) => {
    res.status(200).send("Mariannas Web Is Live")
})


module.exports = server