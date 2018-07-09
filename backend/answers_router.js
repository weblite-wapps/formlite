var express = require('express')
var bodyParser = require('body-parser')
var database = require('./database')

var router = express.Router()

router.use(bodyParser.json())

router.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
})

router.post('/postAnswer', (req, res) => {
  database.addAnswer(req.body.username, req.body.userId, req.body.wisId, req.body.answers)
    .then(() => res.send('submitted'))
    .catch(err => res.status(500).send(err))
})

router.get('/getUserAnswer', (req, res) => {
  database.getUserAnswer(req.query.userId, req.query.wisId)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
})

router.get('/getAllAnswers', (req, res) => {
  database.getAllAnswers(req.query.wisId)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
})

exports.Router = router