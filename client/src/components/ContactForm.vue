<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
  });
  if (res.ok) alert('Сообщение отправлено!');
};
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <input v-model="name" type="text" placeholder="Имя" class="p-2 border"/>
    <br>
    <input v-model="email" type="email" placeholder="Email" class="p-2 border"/>
    <br>
    <textarea v-model="message" placeholder="Сообщение" class="p-2 border"></textarea>
    <br>
    <button type="submit" class="bg-red-800 text-white px-4 py-2">Отправить</button>
  </form>
</template>