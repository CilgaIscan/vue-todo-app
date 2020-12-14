import Vue from 'vue';
import App from './app/App.vue';
import {apolloProvider} from '@/vue-apollo';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
