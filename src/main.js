
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Custom Css Link
import './assets/sass/style.scss'
// Import All from bootstrap
import * as bootstrap from 'bootstrap';

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
