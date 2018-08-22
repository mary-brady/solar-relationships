let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "none provided"
    },
    size: {
        type: String,
        default: "size not provided"
    }

})

module.exports = mongoose.model(schemaName, schema)