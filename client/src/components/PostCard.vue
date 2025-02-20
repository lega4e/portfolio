<script setup lang="ts">
defineProps<{
  post: { id: number; title: string; content: string; category: string; tags: string[] };
}>();
</script>

<template>
  <div class="p-4 bg-gray-900 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4 text-gray-200">{{ post.title }}</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 border-r pr-4 border-gray-700">
        <p class="text-gray-500">{{ post.content.substring(0, 300) }}...</p>
      </div>
      <div class="col-span-1 text-left">
        <p class="text-sm text-gray-400">Категория: {{ post.category }}</p>
        <p class="text-sm text-gray-400">Теги:</p>
        <ul class="text-sm text-gray-400 ml-4 arrow-list">
          <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>