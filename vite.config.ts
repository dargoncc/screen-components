import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 路径别名
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  // 支持使用tsx语法
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h } from "vue";',
  }
})
