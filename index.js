let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))




server.listen(port, () => {
    console.log('Space!!!', port)
})