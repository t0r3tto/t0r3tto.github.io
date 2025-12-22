import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      closeBundle() {
        const cnamePath = join(process.cwd(), 'CNAME')
        const distPath = join(process.cwd(), 'dist', 'CNAME')
        if (existsSync(cnamePath)) {
          copyFileSync(cnamePath, distPath)
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/',
  publicDir: 'public',
})