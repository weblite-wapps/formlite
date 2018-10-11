// module
import request from 'superagent'
// helper
import bus from './bus'
// config
import config from '../../config'

export default {
  postAnswers: (username, userId, wisId, answers) =>
    request
      .post(config.server + '/postAnswer/')
      .set('Access-Control-Allow-Origin', '*')
      .send({ username, userId, wisId, answers })
      .catch(() => bus.$emit('show-message', 'Error has occured ...')),

  getUserAnswers: (userId, wisId) =>
    request
      .get(config.server + '/getUserAnswer/')
      .set('Access-Control-Allow-Origin', '*')
      .query({ userId, wisId })
      .then(res => res.body)
      .catch(() => bus.$emit('show-message', 'Error has occured ...')),

  getAllAnswers: wisId =>
    request
      .get(config.server + '/getAllAnswers/')
      .set('Access-Control-Allow-Origin', '*')
      .query({ wisId })
      .then(res => res.body)
      .catch(() => bus.$emit('show-message', 'Error has occured ...')),
}
