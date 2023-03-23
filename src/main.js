import { createApp } from 'vue'
import App from './App.vue'
import HlAlert from './components/hl-alert/index'

import './assets/main.css'
const app = createApp(App)
app.use(HlAlert)
app.mount('#app')
