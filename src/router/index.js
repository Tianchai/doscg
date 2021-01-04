import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Task1 from '@/pages/doscg/Task-1';
import Task2 from '@/pages/doscg/Task-2';
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
      path: '/doscg/task-1',
      name: 'Task 1',
      component: Task1,
    },
    {
      path: '/doscg/task-2',
      name: 'Task 2',
      component: Task2,
    },
    {
      path: '/doscg/cv',
      name: 'CV',
      component: CV,
    },
  ],
});
