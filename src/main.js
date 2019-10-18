import Vue from 'vue'
import App from './App.vue'

//import do echart
// import 'echarts';
// import Echarts from 'vue-echarts';

// Vue.component('chart', Echarts);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
