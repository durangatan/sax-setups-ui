import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { createProvider } from './vue-apollo';
import { VLazyImagePlugin } from 'v-lazy-image';

Vue.use(VLazyImagePlugin);
Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
