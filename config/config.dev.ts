import { defineConfig } from 'umi';
import proxy from './proxy';

export default defineConfig({
  proxy: proxy.dev,
});
