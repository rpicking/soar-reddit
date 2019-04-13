import Vue from 'vue'
import Vuex from 'vuex'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronUp, faChevronDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './App.vue'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

window.Event = new Vue()

Vue.use(Vuex)
import dotenv from 'dotenv'
dotenv.config()

store.dispatch("updateSubscribedSubredditList")

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
