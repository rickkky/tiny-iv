import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/proxy',
    lib: {
      entry: 'src/proxy.ts',
      formats: ['es'],
      name: 'HimapPointSelector',
      fileName: 'proxy',
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
