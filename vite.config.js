import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Eğer bir alt dizinde çalışıyorsanız bunu "/alt-dizin/" yapın
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});