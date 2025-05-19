import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TwickMediaParser',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['fluent-ffmpeg'],
      output: {
        globals: {
          'fluent-ffmpeg': 'FluentFFmpeg'
        }
      },
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
    dts({
      include: ['src'],
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
      rollupTypes: true,
    }),
  ],
}); 