import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('AUTH: ', store.getters['session/isAuthenticated'])
  // this is giving an infinite loop
  // if(to.meta.requiresAuth && store.getters['session/isAuthenticated']) {
  //   next(to);
  // } else {
  //   next('/');
  //   store.dispatch('session/openEdgeLoginUi');
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
