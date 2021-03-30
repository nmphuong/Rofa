import { api } from './api'

export const getQuerySchema = async (schema) => {
  var headers = {}
  if (schema.hasOwnProperty('tokenCustomer') && schema.tokenCustomer === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers')).token
  }
  if (schema.hasOwnProperty('tokenSeller') && schema.tokenSeller === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers')).token
  }
  var data = await api.get(schema.path, {
    headers: headers
  })
  return data
}
export const postQuerySchema = async (schema) => {
  var headers = {
  }
  if (schema.hasOwnProperty('tokenCustomer') && schema.tokenCustomer === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers')).token
  }
  if (schema.hasOwnProperty('tokenSeller') && schema.tokenSeller === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers')).token
  }
  var data = await api.post(schema.path, schema.data, {
    headers: headers
  })
  return data
}
export const postDataSchema = async (schema) => {
  var headers = {
    'Content-Type': 'multipart/form-data'
  }
  if (schema.hasOwnProperty('tokenCustomer') && schema.tokenCustomer === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbcustomers')).token
  }
  if (schema.hasOwnProperty('tokenSeller') && schema.tokenSeller === true) {
    headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('Oaj0mZteIDsw3vgVxYCbsellers')).token
  }
  var data = await api.post(schema.path, schema.data, {
    headers: headers
  })
  return data
}
