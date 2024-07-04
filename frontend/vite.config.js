import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0', // Consistent with the server configuration
  },
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0', // Listen on all IPs (useful for testing on mobile devices)
    origin: 'http://localhost:3000', // The origin URL for the server
  },
});
