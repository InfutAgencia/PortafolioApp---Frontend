import { fetch } from './fetch'

const login = async (payload) => {
  try {
    const response = await fetch('authentication/login', 'post', payload)
    return response
  } catch (e) {
    return Promise.reject(e)
  }
}

const register = async (payload) => {
  try {
    const response = await fetch('user', 'post', payload, { ContentType: 'multipart/form-data' })
    return response
  } catch (e) {
    return Promise.reject(e)
  }
}

const changePassword = async (payload) => {
  try {
    const response = await fetch('user/reset-pass', 'post', payload)
    return response
  } catch (e) {
    return Promise.reject(e)
  }
}

export const auth = {
  login,
  register,
  changePassword
}
