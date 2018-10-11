// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from './App'
import '@/assets/css/reset.css'

import * as filters from './filters'

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})


FastClick.attach(document.body)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
	router,
  filters,
	store,
	render: h => h(App)
}).$mount('#app-box')
