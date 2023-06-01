import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['AutoTyping.js-master/dist/AutoTyping.min.js']
    }
  }
})
