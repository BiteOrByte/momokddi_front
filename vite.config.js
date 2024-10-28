import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT) || 81,
  },
  preview: {
    port: parseInt(process.env.VITE_PORT) || 80,  // Vite의 preview 모드에서 프로덕션 포트 사용
  }
})
