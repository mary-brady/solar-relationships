let router = require('express').Router()
let Planets = require('../models/Planet')

//get all
router.get('/', (req, res, next) => {
    Planets.find({})
        .then(planets => res.send(planets))
        .catch(next)
})

//get one
router.get('/id', (req, res, next) => {
    Planets.findById(req.params.id)
        .then(planet => res.send(planet))
        .catch(next)
})

//create one
router.post('/', (req, res, next) => {
    Planets.create(req.body)
        .then(planet => res.send(planet))
        .catch(next)
})

//edit one
router.put('/:id', (req, res, next) => {
    Planets.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: 'edited planet!!'
        }))
        .catch(next)
})

//delete one
router.delete('/:id', (req, res, next) => {
    Planets.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'bye planet :('
        }))
        .catch(next)
})

module.exports = router

