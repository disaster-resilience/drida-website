import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// DRIDA public SPA build config
export default defineConfig({
  // GitHub Pages project site is served under /<repo>/.
  // Project site → '/drida-website/'  |  user site (<user>.github.io repo) → '/'
  base: '/drida-website/',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, host: true },
})
