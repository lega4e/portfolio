import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import BlogView from '../views/BlogView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contacts', component: ContactView },
  { path: '/blog', component: BlogView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;