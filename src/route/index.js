import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../components/HomeView.vue";
import Quiz from '../components/Quiz.vue';

const route = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/quiz/:id',
                name: 'quiz',
                component: Quiz
            }
        ]
    }
)


export default route;