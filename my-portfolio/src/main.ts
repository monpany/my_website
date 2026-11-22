import './assets/main.css'

import { createApp } from 'vue'
import PortfolioBanner from './components/PortfolioBanner.vue'
import router from './router'
import App from './App.vue'


const app = createApp(App)

// Register global components
app.component('PortfolioBanner', PortfolioBanner)

app.mount('#app')