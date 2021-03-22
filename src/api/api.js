import axios from 'axios'
import { BASE_API_URL } from '../constant/constant'
export const api = axios.create({
  baseURL: BASE_API_URL
})
