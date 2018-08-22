let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let galaxyRoutes = require('./routes/galaxies')
let starRoute = require('./routes/stars')
let planetRoute = require('./routes/planets')


server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoute)
server.use('/api/planets', planetRoute)

server.use('/api/*', (error, req, res, next) => {
    res.send(error)
})

server.use('*', (req, res, next) => {
    res.status(404).send('<p>Not a real page</p>')
})


server.listen(port, () => {
    console.log('Space!!!', port)
})