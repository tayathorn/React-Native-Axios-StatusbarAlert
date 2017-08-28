import axios from 'react-native-axios'

config = {
  'Content-Type': 'application/json',
}

const baseUrl = 'https://47r4l0m89.lp.gql.zone/graphql'

export default {
  get: (params={}) => {
    return axios.get(baseUrl, Object.assign({ params }, config))
  },

  post: (data) => {
    return axios.post(baseUrl, data, config)
  }
}