import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import UserLogin from './components/UserLogin.vue';
import UserDashboard from './components/UserDashboard.vue';
import CourseDetails from './components/CourseDetails.vue';

const routes = [
  { path: '/', component: UserLogin },
  { path: '/dashboard', component: UserDashboard },
  { path: '/course/:id', name: 'CourseDetails', component: CourseDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
