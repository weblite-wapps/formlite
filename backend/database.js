var mongoose = require('mongoose')
var models = require('./db_models')

exports.connect = function(name) {
  mongoose.connect('mongodb://localhost/' + name);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected to database successfully ...')
    db.db.dropDatabase()
  });
}

exports.addAnswer = function(username, userId, wisId, answers) {
  var answer = new models.Answer({
    username: username,
    userId: userId,
    wisId: wisId,
    answers: answers
  })

  return answer.save()
}

exports.getUserAnswer = function(userId, wisId) {
  return models.Answer.findOne({userId: userId, wisId: wisId}).exec().then(res => {
    if (!res) 
      return { found: false, answers: [] }
    else {
      return { found: true, answers: res.answers } 
    }
  })
}

exports.getAllAnswers = function(wisId) {
  return models.Answer.find({wisId: wisId}).exec()
}