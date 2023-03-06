import { createApp } from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import { createRouter, createWebHistory } from 'vue-router'
import VTooltip from 'v-tooltip'

const app = createApp(App);
app.use(AOS.init())
app.use(VTooltip)
app.use(VueScrollTo)
app.mount('#app')

// import './assets/main.css'

// createApp(App).mount('#app')
