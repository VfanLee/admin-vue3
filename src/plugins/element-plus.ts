import '@/styles/element-plus/index.scss'

import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  install(app: App) {
    // 注册 element-plus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
