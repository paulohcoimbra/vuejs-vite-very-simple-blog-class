<template>
  <div class="flex shadow hover:shadow-lg transition w-130 h-80 border bg-gradient-to-br from-[#adcbf8a6] to-[#daaf7769]">
    <img :src="`${post.img}`" alt="Imagem do blog" class="w-1/3">
    <div class="flex flex-col p-4 justify-around w-2/3">
      <small>4 de dez. de 2025 - 1 min leitura</small>
      <router-link :to="`/post/${post.slug}`">
        <h2 class="text-3xl">{{ post.title }}</h2>
        <p class="text-gray-500">{{ post.description }}</p>
      </router-link>
      <hr>
      <div class="flex gap-4">
        <small class="">{{ randomNumber(1000) }} visualização</small>
        <small>{{ randomNumber(100) }} comentários</small>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ post: Object });
function randomNumber(max) {
  return Math.floor(Math.random() * max)
}
</script>
