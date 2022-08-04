// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  extraBabelPlugins: ['transform-remove-console'],
});
