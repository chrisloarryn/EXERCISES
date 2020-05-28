const dotenv = require('dotenv')
dotenv.config({path: './.env'})

const app = require('./app')

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`Listening on port`, PORT)
})