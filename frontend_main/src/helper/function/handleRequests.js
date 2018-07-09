import request from 'superagent'
const domain = 'http://192.168.43.157:3000/'

export default {
  postAnswers: (username, userId, wisId, answers) => {
    return request
      .post(domain + 'postAnswer/')
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
      .get(domain + 'getUserAnswer/')
      .query({userId: userId, wisId: wisId})
      .then(res => {
        return res.body
      })
  },

  getAllAnswers: (wisId) => {
    return request
      .get(domain + 'getAllAnswers/')
      .query({wisId: wisId})
      .then(res => {
        return res.body
      })
  }
}