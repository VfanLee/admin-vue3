import 'normalize.css'
import './styles/index.scss'
import './styles/element-plus/index.scss'

import { createPinia } from 'pinia'
import router from './router'
import './permission'
import i18n from './i18n'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import App from './App.vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
