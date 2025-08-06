import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Loads .env variables

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: parseInt(env.VITE_LOGIKS_FORM_PORT) || 5173,
      host: env.VITE_LOGIKS_FORM_HOST || 'localhost',
    },
  };
});
