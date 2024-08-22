import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'HimapCore',
        fileName: 'himap-core',
      },
    },
    plugins: [
      dts({
        rollupTypes: true,
      }),
    ],
  };
});
