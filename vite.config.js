import { fileURLToPath, URL } from 'node:url'
import { resolve, basename } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevtools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: Infinity,
    // https://cn.rollupjs.org/configuration-options/
    rollupOptions: {
      output: {
        chunkFileNames({ name }) {
          if (name.startsWith('locales/')) {
            return '[name].js'
          } else {
            return `[name]-[hash].js`
          }
        },
        manualChunks(id) {
          if (id.includes('element-plus')) {
            return 'vendor.element-plus'
          }
          if (id.includes('i18n/locales')) {
            const name = basename(id, '.ts')
            return `locales/${name}`
          }
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevtools(),
    AutoImport({
      // 自动生成类型文件
      dts: 'types/auto-imports.d.ts',
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自动生成类型文件
      dts: 'types/components.d.ts',
      // 自动导入 Element Plus 组件
      resolvers: [ElementPlusResolver()],
    }),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
    // https://github.com/vbenjs/vite-plugin-compression#options

    viteCompression({
      algorithm: 'gzip', // gzip
      ext: '.gz',
      threshold: 102400,
      filter: (file) => /\.(js|mjs|json|css|html|svg)$/.test(file),
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress', // brotli
      ext: '.br',
      threshold: 102400,
      filter: (file) => /\.(js|mjs|json|css|html|svg)$/.test(file),
      deleteOriginFile: false,
    }),
  ],
}))
