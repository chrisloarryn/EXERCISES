const router = require('express').Router()
const pokemonRoutes = require('./api/pokemonRoutes')

router.use('/pokemons', pokemonRoutes)

module.exports = router