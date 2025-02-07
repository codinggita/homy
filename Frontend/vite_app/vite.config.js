import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts:[
'34fb-2409-40c1-300d-2844-d10d-7d7d-a6e4-c97f.ngrok-free.app'
    ]
    
  }
})
