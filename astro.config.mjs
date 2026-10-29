// @ts-check
import { defineConfig } from 'astro/config';

// さくらレンタルサーバの ~/www/lp/ に配置し、https://kaihojpn.com/lp/ で公開する前提。
// ルート直下へ移す場合は base を '/' に変更すること。
export default defineConfig({
  site: 'https://kaihojpn.com',
  base: '/lp',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
