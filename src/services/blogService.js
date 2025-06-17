import axios from 'axios'
import { posts } from '../data/posts'

const URL = 'https://fiap-bff-0aojr.onrender.com/'

const apiClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

export async function getAllBlogPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(posts), 2000)
  })
  // return apiClient.get('/blog')
}