const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')


const router = express.Router()
router.use(bodyParser.json())


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
