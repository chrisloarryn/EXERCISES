const axios = require('axios')

exports.getAllPokemons = async (req, res, next) => {
  const baseUrl = process.env.API_URL
  console.log(baseUrl)
  let data
  try {
    let pokemons = []
    const res = await axios.get(`${baseUrl}pokemon?offset=0&limit=25`)

    for (let item of res.data.results) {
        const detailed = await getDetails(item)
        pokemons.push(detailed)
    }

    data = pokemons[0]
  } catch (error) {
    console.log('error!')
  }

  res.json({ message: 'success', data })
}

const getDetails = async pokemon => {
  let pokemonReturn = await axios.get(pokemon.url)
  return pokemonReturn.data
}
