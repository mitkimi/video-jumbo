// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VideoJumbo from './components/videoJumbo/';

// 插件安装部分
const myPlugin = {};
myPlugin.install = () => {
  if (myPlugin.install.installed) {
    return;
  }
  Vue.component('video-jumbo', VideoJumbo);
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

module.exports.default = myPlugin;
