import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/main',
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'HimapPointSelector',
      fileName: 'himap-point-selector',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
    }),
  ],
});
