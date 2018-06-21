// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // is the main class of the framework
import App from './App' // is the root component of application
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */ // create a new instance of the main framework class Vue.
new Vue({ 
  el: '#app', // html element where the output of Vue Application should be rendered.
  router,
  components: { App },
  template: '<App/>' // list of components used in the template
})