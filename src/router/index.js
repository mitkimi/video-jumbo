import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index';

Vue.use(Router);

const vueRouter = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});

export default vueRouter;
