import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import './registerServiceWorker';
import iView from 'iview';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
