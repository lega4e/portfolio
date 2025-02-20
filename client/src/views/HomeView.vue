<script setup lang="ts">
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Привет, я Чепчик</h1>
    <div class="space-y-6">
        <p></p>
        <p>Веб-дятел, люблю TypeScript, минимализм и красивые вещи.</p>
        <p>
          Напиши мне, если хочешь, чтобы я сделал для тебя что-то. А если не хочешь, чтобы я сделал для тебя что-то, то напиши мне, чтобы я не делал для тебя ничего.
        </p>
        <p></p>
    </div>
    <ContactForm />
  </div>
</template>