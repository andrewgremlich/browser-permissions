import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

export default defineConfig({
  plugins: [tsconfigPaths(), dts()],
  build: {
    lib: {
      entry: 'src/scripts/index.ts',
      name: pkg.name,
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist/esm',
        },
      ],
    },
  },
})