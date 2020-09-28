import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'https://winebored.herokuapp.com'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

// Wine Requests

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWine = id => {
  return axios.get(`${baseUrl}/wines/${id}`)
}

export const createWine = formData => {
  return axios.post(`${baseUrl}/wines`, formData, withHeaders())
}

// Auth Requests

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}