import axios from 'react-native-axios'

config = {
  'Content-Type': 'application/json',
}

export default {
  get: (url, params={}) => {
    return axios.get(url, Object.assign({ params }, config))
  },

  post: (url, data) => {
    return axios.post(url, data, config)
  }
}