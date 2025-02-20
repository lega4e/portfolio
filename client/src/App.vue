<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen">
    <nav class="max-w-3xl mx-auto p-4 text-2xl">
      <ul class="flex space-x-4">
        <li><router-link to="/">Главная</router-link></li>
        <li>|</li>
        <li><router-link to="/contacts">Контакты</router-link></li>
        <li>|</li>
        <li><router-link to="/blog">Блог</router-link></li>
    </ul>
  </nav>
    <hr class="max-w-3xl mx-auto border-gray-600 border-t-1" />
    <RouterView class="p-4" />
  </div>
</template>
