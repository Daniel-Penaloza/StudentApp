// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFire from 'vuefire'
import firebase from 'firebase'
import 'bulma/css/bulma.css'
import vueBulmaComponents from 'vue-bulma-components'
library.add(faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueFire)
Vue.use(vueBulmaComponents)
Vue.use(firebase)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
