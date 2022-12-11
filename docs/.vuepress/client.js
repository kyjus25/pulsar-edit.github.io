import { defineClientConfig } from '@vuepress/client';
import Packages from './layouts/Packages.vue';

export default defineClientConfig({
  enhance({ router }) {
    router.addRoute({ path: '/packages', component: Packages })
  },
})