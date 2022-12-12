import { defineClientConfig } from '@vuepress/client';
import Package from './layouts/Package.vue';
import Packages from './layouts/Packages.vue';

export default defineClientConfig({
  enhance({ router }) {
    router.addRoute({ path: '/packages', component: Packages }),
    router.addRoute({ path: '/packages/:id', component: Package })
  },
})