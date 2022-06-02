import { defineClientConfig } from '@vuepress/client';
import { createPinia } from 'pinia';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pinia = createPinia();
    app.use(pinia);
  },
  setup() {},
  rootComponents: [],
});
