import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';




export default defineConfig({
  plugins: [react()],
  base: '/register',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5002', // Backend URL
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: false, // If you're using HTTPS and have self-signed certificates
      },
    },
  },
});
