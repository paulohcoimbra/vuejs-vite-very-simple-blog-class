/<template>
  <div class="bg-gradient-to-br from-[#adcbf8a6] to-[#daaf7769] m-0 flex">
    <div class="flex flex-col items-center flex-wrap gap-4 w-2/3">
      <h1 class="text-4xl mt-4">Posts</h1>
      <div v-if="posts.length === 0">
        <svg class="animate-spin h-8 w-8 text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
      <PostCard v-else v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="w-1/3 flex flex-col items-center border-s-1 border-gray-400">
      <NewsCard v-for="notice in response.data" :key="notice.title" :notice="notice" />
    </div>
  </div>
  <p class="text-center text-gray-500 text-xs m-4">
    &copy; 2024 Oitão Junior Blog. Todos os direitos reservados.
  </p>
</template>

<script setup>
import { inject } from 'vue'
import { response } from '../data/news'
import PostCard from '../components/PostCard.vue';
import NewsCard from '../components/NewsCard.vue';

const posts = inject('posts')
</script>