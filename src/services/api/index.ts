import axios from 'axios'
import constants from './constants'

export const api = axios.create({
    baseURL: constants.API_BASE_URL,
    timeout: constants.API_REQUEST_TIMEOUT,
})
