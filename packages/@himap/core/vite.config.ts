import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'HimapCore',
        fileName: 'himap-core',
      },
    },
  };
});
