const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/apiRoutes')

app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json({ limit: '10kb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }))


app.use('/api/v1', apiRoutes)

module.exports = app