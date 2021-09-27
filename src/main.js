import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import {dollarFilter} from './filters'
import {percentFilter} from './filters'
// import VueChartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)
Vue.filter('dollar',dollarFilter)
Vue.filter('percent',percentFilter)
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
