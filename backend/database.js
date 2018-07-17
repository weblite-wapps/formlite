var mongoose = require('mongoose')
var models = require('./db_models')

exports.connect = function(name) {
  mongoose.connect('mongodb://localhost/' + name);

  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('connected to database successfully ...')
    db.db.dropDatabase()
  })
}

exports.addAnswer = (username, userId, wisId, answers) => new models
  .Answer({ username, userId, wisId, answers })
  .save()


exports.getUserAnswer = (userId, wisId) => models.Answer
  .findOne({ userId, wisId })
  .exec()
  .then((res) => {
    if (!res) return { found: false, answers: [] }
    else return { found: true, answers: res.answers }
  })

exports.getAllAnswers = wisId => models.Answer
  .find({ wisId })
  .exec()
