// modules
var express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')
const cors = require('cors')
// files
var answersRouter = require('./answers_router')
var database = require('./database')


var app = express()
database.connect('formlite_db')
app.use(cors({ origin: '*' }))
app.use('/', answersRouter.Router)


const key = fs.readFileSync(path.resolve('./certs/express.key'), 'utf8')
const cert = fs.readFileSync(path.resolve('./certs/express.crt'), 'utf8')

https
  .createServer({ key, cert }, app)
  .listen(3091)
