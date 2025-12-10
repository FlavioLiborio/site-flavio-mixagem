// ATUALIZE VITE.CONFIG.TS SE A REINSTALAÇÃO FALHAR
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', 
  
  build: {
    assetsDir: 'assets',
    cssCodeSplit: true, 
  },
  
  plugins: [react()],
});