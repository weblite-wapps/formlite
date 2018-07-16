import request from 'superagent'
const domain = 'http://localhost:3000/'


export default {
  postAnswers: (username, userId, wisId, answers) => request
    .post(domain + 'postAnswer/')
    .send({ username, userId, wisId, answers })
    .catch(() => { bus.$emit('show-message', 'Error has occured ...') }),

  getUserAnswers: (userId, wisId) => request
    .get(domain + 'getUserAnswer/')
    .query({ userId , wisId })
    .then(res => res.body)
    .catch(() => { bus.$emit('show-message', 'Error has occured ...') }),

  getAllAnswers: wisId => request
    .get(domain + 'getAllAnswers/')
    .query({ wisId })
    .then(res => res.body)
    .catch(() => { bus.$emit('show-message', 'Error has occured ...') })
}
