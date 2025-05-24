import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      proxy: {
        '/api/gemini-search': {
          target: `${env.VITE_SUPABASE_URL}/functions/v1`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/gemini-search/, '/gemini-search'),
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              // Add the Authorization header with the anon key
              proxyReq.setHeader('Authorization', `Bearer ${env.VITE_SUPABASE_ANON_KEY}`);
            });
          },
        },
      },
    },
  };
});