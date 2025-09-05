import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ArcoResolver()], // 自动引入 Arco 组件 & 样式
    }),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PennyCompo',
      fileName: 'penny-compo',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'penny-compo.css') {
            return 'index.css'; // 👈 修改最终的 css 文件名
          }
          return assetInfo.name as string;
        },
      },
    },
  },
})
