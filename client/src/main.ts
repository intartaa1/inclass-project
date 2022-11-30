import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './client/src/App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')