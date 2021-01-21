import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(Toasted)
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App),
}).$mount('#app')
