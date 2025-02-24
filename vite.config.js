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
          // vendor
          const packageMap = {
            '@vue': 'vendor-vue',
            'element-plus': 'vendor-element-plus',
          }
          for (const [pkg, chunkName] of Object.entries(packageMap)) {
            if (id.includes(`/node_modules/${pkg}/`)) {
              return chunkName
            }
          }
          if (id.includes('node_modules')) {
            console.log('@node_modules', id)
            return 'vendor'
          }

          // locales
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
      // 自动生成类型声明文件
      dts: 'types/auto-imports.d.ts',
      imports: [
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        'vue',
      ],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
    }),
    Components({
      // 自动生成类型声明文件
      dts: 'types/components.d.ts',
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
    }),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
    // https://github.com/vbenjs/vite-plugin-compression#options
    // gzip 压缩
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      filter: (file) => /\.(js|mjs|json|css|html|svg)$/.test(file),
      deleteOriginFile: false,
    }),
    // brotli 压缩
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      filter: (file) => /\.(js|mjs|json|css|html|svg)$/.test(file),
      deleteOriginFile: false,
    }),
  ],
}))
