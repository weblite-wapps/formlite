import request from 'superagent'

export default {
  postAnswers: (username, userId, wisId, answers) => {
    return request.post('http://localhost:8000/postAnswer').then(res => {
      console.log(res.body)
    }, err => {
      console.log(err)
    })
  },

  getUserAnswers: (userId, wisId) => {

  },

  getAllAnswers: (wisId) => {
    
  }
}