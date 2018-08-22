let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Planet'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "No desc provided"
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    },
    starId: {
        type: ObjectId,
        ref: 'Star',
        required: true
    }
})