import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import CV from '@/pages/doscg/CV';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/doscg/cv',
      name: 'CV',
      component: CV,
    },
  ],
});
