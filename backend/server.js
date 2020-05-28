const dotenv = require('dotenv')

const app = require('./app')
app.use(dotenv({path: './.env'}))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT)
})