import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Gzip压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 大于10kb才压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // GitHub Pages 部署基础路径
  base: './',
  build: {
    // 启用代码压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true, // 移除debugger
      },
    },
    // 分割代码块
    rollupOptions: {
      output: {
        // 分离vendor
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
        // 优化文件名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 设置chunk大小警告阈值
    chunkSizeWarningLimit: 500,
    // 生成source map便于调试
    sourcemap: false,
  },
  // 优化依赖预构建
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
