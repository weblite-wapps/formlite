// modules
const express = require('express')
const cors = require('cors')
// files
const answersRouter = require('./answers_router')
const database = require('./database')


const app = express()
database.connect('formlite_db')
app.use(cors({ origin: '*' }))
app.use('/', answersRouter.Router)


app.listen(3191, () => console.log('Server Running!'))
