import { fetch } from './fetch'

const getCompanies = async () => {
  try {
    const response = await fetch('company/list', 'get')
    return response
  } catch (e) {
    return Promise.reject(e)
  }
}

export const lists = {
  getCompanies
}
