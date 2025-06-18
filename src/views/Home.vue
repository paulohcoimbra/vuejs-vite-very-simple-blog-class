/<template>
  <div class="flex">
    <div class="flex flex-col items-center flex-wrap gap-4 w-2/3">
      <h1 class="text-4xl mt-4">Posts</h1>
      <div v-if="postsResponse.length === 0">
        <svg class="animate-spin h-8 w-8 text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
        <PostCard v-else v-for="post in postsResponse" :key="post.id" :post="post" />
    </div>
    <div class="w-1/3 flex flex-col items-center">
      <NewsCard v-for="notice in response.data" :key="notice.title" :notice="notice" />
    </div>
  </div>
  <p class="text-center text-gray-500 text-xs m-4">
    &copy; 2024 Oitão Junior Blog. Todos os direitos reservados.
  </p>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import { getAllBlogPosts } from '../services/blogService';
import { response } from '../data/news'
import { posts } from '../data/posts'
import PostCard from '../components/PostCard.vue';
import NewsCard from '../components/NewsCard.vue';

const postsResponse = ref([])

onMounted(async () => {
  try {
    const response = await getAllBlogPosts()
    postsResponse.value = response.data.data
  } catch (error) {
    console.error('Erro ao carregar os posts: ', error)
    console.warn('Falha ao obter os posts da API, Carregando posts locais...')
    postsResponse.value = posts.data
  }
})
</script>