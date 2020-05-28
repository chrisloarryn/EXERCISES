const express = require('express')
const morgan = require('morgan')
const app = express()

const apiRoutes = require('./routes/apiRoutes')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

app.use('/api/v1', apiRoutes)

app.use('*', (req, res, next) => {
    console.log('Could not find route')
})

module.exports = app