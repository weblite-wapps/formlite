import request from 'superagent'

export default {
  postAnswers: (username, userId, wisId, answers) => {
    return request
      .post('http://localhost:8000/postAnswer/')
      .send({
        username: username,
        userId: userId,
        wisId: wisId,
        answers: answers
      })
      .then(res => {
        return res
      })
  },

  getUserAnswers: (userId, wisId) => {
    return request
      .get('http://localhost:8000/getUserAnswer/')
      .query({userId: userId, wisId: wisId})
      .then(res => {
        return res.body
      })
  },

  getAllAnswers: (wisId) => {
    return request
      .get('http://localhost:8000/getAllAnswers/')
      .query({wisId: wisId})
      .then(res => {
        return res.body
      })
  }
}