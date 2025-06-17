<template>
    <div class="w-2/3 mt-8 flex flex-col gap-4 p-4">
        <div class="m-4 flex gap-4">
            <img :src="`${notice.img}`" :alt="`${notice.caption} picture`" class="rounded-4xl size-24">
            <h2 class="text-2xl">{{ notice.title }}</h2>
        </div>
        <p class="text-gray-500">{{ notice.text }}</p>
        <small>{{ notice.caption }}</small>
        <a :href="`${notice.link}`" class="font-bold text-blue-600">Saiba mais</a>
    </div>
</template>

<script setup>
defineProps({notice: Object})
</script>