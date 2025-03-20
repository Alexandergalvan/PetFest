import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PetFest/',
  server: {
    allowedHosts: ['d99b-187-136-170-44.ngrok-free.app'],
  }
})
