import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import vueCustomElement from 'vue-custom-element';
import AppleComponent from './components/AppleComponent';

Vue.use(vueCustomElement);

Vue.customElement("apple-component", new AppleComponent().$options);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
