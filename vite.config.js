import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'f512d63ef5cf.ngrok-free.app', 
    ],
  },
})
