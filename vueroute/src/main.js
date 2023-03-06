import { createApp } from 'vue'
import VueRouter from 'vue-route';
import App from './App.vue'

import routes from './routes';

const app = createApp(App);
app.use(routes)
app.mount('#app')

// createApp(App).mount('#app')


