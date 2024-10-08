
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Custom Css Link
import * as bootstrap from 'bootstrap';

import './assets/sass/style.scss'
// Import All from bootstrap

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
