var express = require('express')
var answersRouter = require('./answers_router')
var database = require('./database')
var app = express()

database.connect('formlite_db')

app.use('/', answersRouter.Router)

app.listen(3091, () => console.log("server running ..."))
