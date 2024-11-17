import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Inspect from 'vite-plugin-inspect'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: '/vue3-admin-template/', // 默认：/
  resolve: {
    // 别名设置
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  build: {
    outDir: 'dist', // 默认：dist
  },
  server: {
    host: 'localhost', // 默认：localhost
    port: '5173', // 默认：5173
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自动导入 Element Plus 组件
      resolvers: [ElementPlusResolver()],
    }),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
    Inspect(),
    vueSetupExtend(),
  ],
}))
