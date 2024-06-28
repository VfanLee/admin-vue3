import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import './router/permission'
import { name, version } from '/package.json'

import 'virtual:svg-icons-register'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import PageHeader from '@/components/PageHeader.vue'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component(PageHeader.name, PageHeader)

app.use(pinia)
app.use(router)

app.mount('#app')

// log version
console.log(`%c${name}%cv${version}`, 'padding: 2px 6px; border-radius: 4px 0 0 4px; background-color: #000000; color: #f8d875; font-size: 12px;', 'padding: 2px 6px; border-radius: 0 4px 4px 0; background-color: #ffffff; color: #000000; font-size: 12px;')
