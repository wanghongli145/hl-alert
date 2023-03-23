import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: "modules",
    // 压缩
    minify: true,
    lib: {
      entry: "./src/components/hl-alert/index.js",
      name: "hlAlert",
      fileName: 'hl-alert'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        dir: resolve(__dirname, "./dist/lib")
      },
    }
  }
})
