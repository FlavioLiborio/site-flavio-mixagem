import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
base: 'https://site-flavio-mixagem.vercel.app/',
  plugins: [react()],
})
