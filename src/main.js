import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'

// Importação do PrimeVue e seus componentes
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css' // tema
import 'primevue/resources/primevue.min.css' // core
import 'primeicons/primeicons.css' // ícones

// Inicialização do aplicativo com PrimeVue
const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')
