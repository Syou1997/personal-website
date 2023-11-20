import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Pinia
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.use(router)

app.mount('#app')


