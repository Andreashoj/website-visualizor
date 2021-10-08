import { createRouter, createWebHistory } from 'vue-router';
import frontpage from '/src/pages/frontpage.vue';
const routes = [
  {
    path: '/',
    name: 'Frontpage',
    component: frontpage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
