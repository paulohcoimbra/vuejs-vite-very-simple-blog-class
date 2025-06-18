import axios from 'axios'

const URL = 'https://fiap-bff-0aojr.onrender.com/'

const apiClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000
})

export async function getAllBlogPosts() {
  return apiClient.get('/blog')
}

export async function getBlogPost(id) {
  return apiClient.get(`/blog/${id}`)
}