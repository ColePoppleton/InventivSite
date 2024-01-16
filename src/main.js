import { createApp } from 'vue';
import App from './App.vue';
import Hero from './components/Hero.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Hero, name: 'home' }, // Set the name for the home route
        // Add more routes as needed
    ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');