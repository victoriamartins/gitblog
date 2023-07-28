import axios from 'axios'

export const profileAPI = axios.create({
  baseURL: 'https://api.github.com/',
})

export const listIssuesAPI = axios.create({
  baseURL: 'https://api.github.com/search/',
})
