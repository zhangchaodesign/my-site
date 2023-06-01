import { resolve } from 'path';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon'
        })
      ]
    }),
    Icons({
      compiler: 'vue3'
    }),
    vitePluginFaviconsInject('./src/assets/logo/icon.svg'),
  ]
});
