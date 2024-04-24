import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//引入node提供的内置模块path
// https://vitejs.dev/config/
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      "@":path.resolve(__dirname, 'src')
    }
  }
})
