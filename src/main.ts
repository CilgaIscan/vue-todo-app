import Vue from 'vue';
import App from './app/App.vue';
// @ts-ignore
// import { createProvider } from './vue-apollo';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  // apolloProvider: createProvider(),
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
