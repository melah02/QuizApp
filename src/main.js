
import { createApp } from 'vue'
import App from './App.vue'
import route from '../src/route/index.js';


const app = createApp(App);
app.use(route)

app.mount('#app')
