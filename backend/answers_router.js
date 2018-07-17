var express = require('express')
var bodyParser = require('body-parser')
var database = require('./database')

var router = express.Router()

router.use(bodyParser.json())

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

router.post('/postAnswer', ({ body }, res) => database
  .addAnswer(body.username, body.userId, body.wisId, body.answers)
  .then(() => res.send('submitted'))
  .catch(err => res.status(500).send(err)))

router.get('/getUserAnswer', ({ query }, res) => database
  .getUserAnswer(query.userId, query.wisId)
  .then(data => res.send(data))
  .catch(err => res.status(500).send(err)))

router.get('/getAllAnswers', (req, res) => database
  .getAllAnswers(req.query.wisId)
  .then(data => res.send(data))
  .catch(err => res.status(500).send(err)))


exports.Router = router
