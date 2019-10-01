const server = require('./server/server')

PORT = process.env.PORT || 6000

server.listen(PORT, () => {
    console.log("Server is currently running on port", PORT)
})