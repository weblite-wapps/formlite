var mongoose = require('mongoose')

exports.Answer = mongoose.model('Answer', new mongoose.Schema({
  username: String,
  userId: String,
  wisId: String,
  answers: Array
}))