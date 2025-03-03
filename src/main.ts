import './styles/index.scss'

import { createPinia } from 'pinia'
import router from './router'
import './permission'
import i18n from './i18n'
import ElementPlus from './plugins/element-plus'

import 'virtual:svg-icons-register'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
