import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import './router/permission'
import { name, version } from '/package.json'

import 'virtual:svg-icons-register'
import App from './App.vue'

import 'normalize.css'
import './styles/index.scss'

import PageHeader from '@/components/PageHeader.vue'

const app = createApp(App)

app.component(PageHeader.name, PageHeader)

app.use(pinia)
app.use(router)

app.mount('#app')

// log version
console.log(`%c${name}%cv${version}`, 'padding: 2px 6px; border-radius: 4px 0 0 4px; background-color: #000000; color: #f8d875; font-size: 12px;', 'padding: 2px 6px; border-radius: 0 4px 4px 0; background-color: #ffffff; color: #000000; font-size: 12px;')
