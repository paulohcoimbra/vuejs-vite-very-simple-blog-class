import axios from 'axios'

const URL = 'https://fiap-bff-0aojr.onrender.com/'

const apiClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

export async function getAllBlogPosts() {
  return apiClient.get('/blog')
}