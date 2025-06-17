<template>
  <header class="flex flex-col justify-center items-center gap-4 p-4 relative isolate overflow-hidde h-80">
    <p class="text-gray-700 sm:text-xl/8">
      {{ pageDescription }}
    </p>
    <h2 class="font-semibold tracking-tight sm:text-7xl">
      {{ pageTitle }}
    </h2>
  </header>
  <nav class="flex items-center justify-center border">
    <router-link
      to="/"
      class="px-8 py-4 border-s border-e"
      active-class="text-blue-500 border-black"
      exact
    >
      Home
    </router-link>
    <router-link
      to="/about"
      class="px-8 py-4 border-e "
      active-class="text-blue-500 border-black"
    >
      About Us
    </router-link>
    <router-link
      to="/contact"
      class="px-8 py-4 border-e"
      active-class="text-blue-500 border-black"
    >
      Contact
    </router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<script setup>
const pageTitle = 'Oitão Junior Blog'
const pageDescription = "Bem-vindo ao nosso blog! Compartilhando ideias, aprendizados e inspiração para o seu dia a dia."
</script>