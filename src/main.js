import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import storage from '@/server/storage.js';

import Toast from './components/toast/toast.js';
Vue.use(Toast);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  var mToken = storage.get('msdWebToken'); 
  if (!mToken) {
    if (to.path === '/author') {
      next();
    } else {
      next('/author');
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
