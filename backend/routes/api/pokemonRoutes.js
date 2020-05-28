const router = require('express').Router()
const pokemonController = require('./../../controllers/pokemonController')


router.get('/', pokemonController.getAllPokemons)

module.exports = router

