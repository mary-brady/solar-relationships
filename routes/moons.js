let router = require('express').Router()
let Moons = require('../models/Moon')

//get all
router.get('/', (req, res, next) => {
    Moons.find({})
        .then(moons => res.send(moons))
        .catch(next)
})

//get one
router.get('/:id', (req, res, next) => {
    Moons.findById(req.params.id)
        .then(moon => res.send(moon))
        .catch(next)
})

//create one
router.post('/', (req, res, next) => {
    Moons.create(req.body)
        .then(moon => res.send(moon))
        .catch(next)
})

//edit one
router.put('/:id', (req, res, next) => {
    Moons.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: 'Moon updated!'
        }))
        .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
    Moons.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Moon gone'
        }))
        .catch(next)
})

module.exports = router