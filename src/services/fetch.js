import axios from 'axios'
import { BASE_URL, TOKEN_KEY } from '../constants'
import { getStore } from '../utils/storage'

export const fetch = async (url, method, data, options = { ContentType: 'application/json' }) => {
  const token = await getStore(TOKEN_KEY)
  const URL = `${BASE_URL}/${url}`
  return axios({
    url: URL,
    method,
    headers: {
      'Content-Type': options.ContentType,
      Authorization: token ? `Bearer ${token}` : undefined
    },
    data
  })
}
