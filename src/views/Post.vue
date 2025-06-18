<template>
  <div class="bg-gradient-to-br from-[#adcbf8a6] to-[#daaf7769] m-0 p-8">
    <div v-if="post" class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-4">
      <img :src="`${post.img}`" :alt="`${post.slug}`" class="size-100">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">{{ post.title }}</h1>
      <p class="text-xl text-gray-500">{{ post.description }}</p>
      <p class="text-lg text-gray-700 leading-relaxed">{{ post.content }}</p>
    </div>
    <div v-else class="flex flex-col items-center justify-center min-h-[40vh]">
      <p class="text-xl text-gray-500">Post não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject, computed } from 'vue'

const route = useRoute();
const posts = inject('posts')

const post = computed(() => posts.value.find((p) => p.slug === route.params.slug));
</script>