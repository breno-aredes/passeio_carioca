import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './tailwind.css'
import emitter from './utils/eventBus'

// Importações do PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.provide('emitter', emitter)
app.mount('#app')
