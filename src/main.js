import Vue from 'vue'
import App from './App.vue'

// Importazione di bootstrap 5.2 
// importare direttamente come file perchè  poi ci penserà vue cli( al suo interno tra i suoi file di settaggio di impostazioni ha webpack) a fare il rendering(compressioneme, esportazione utile), mettendole all'interno del head e alla fine del body come da programma.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
