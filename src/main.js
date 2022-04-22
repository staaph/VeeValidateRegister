import { createApp } from 'vue'
import App from './App.vue'
import VeeValidatePlugin from '@/plugin/validation.js'
import '@/assets/index.css'

const app = createApp(App) 
app.use(VeeValidatePlugin)
app.mount('#app')
