<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PostCard from '../components/PostCard.vue';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

const posts = ref<Post[]>([]);

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  posts.value = await res.json();
});
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Блог</h1>
    <div class="grid gap-4">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>