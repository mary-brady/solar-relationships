let mongoose = require('mongoose')
const connectionString = 'mongodb://maryb:password1@ds018558.mlab.com:18558/solar'
let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log('DB ERROR: ', err)
})

connection.once('open', () => {
    console.log("Connected to da DB!")
})