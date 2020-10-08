import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './lib/desing_mockup';
import axios from 'axios';
 
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
const path = require('path')


axios.defaults.baseURL = 'https://api.npoint.io/';


//Personal Components
Vue.component('Carousel', require('./components/Carousel.vue').default);
Vue.component('Flowers', require('./components/Flowers.vue').default);
Vue.component('Splash', require('./components/Splash.vue').default);
Vue.component('BestFlowers', require('./components/BestFlowers.vue').default);
Vue.component('ExclusiveOffers', require('./components/ExclusiveOffers.vue').default);
Vue.component('Brands', require('./components/Brands.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);
Vue.component('CarShop', require('./components/CarShop.vue').default);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
