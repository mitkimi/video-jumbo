import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
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

vueRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

vueRouter.afterEach(() => {
  NProgress.done();
});

export default vueRouter;
