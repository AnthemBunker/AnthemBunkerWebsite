import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import MetamaskSection from './pages/Metamask.vue';
import Dashboard from './pages/Dashboard.vue';
<<<<<<< HEAD
import store from './store';
=======
>>>>>>> ba189cef7ab0d483b1e9c9f0c485699449574b7e

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/metamask',
      name: 'metamask',
      component: MetamaskSection,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
<<<<<<< HEAD
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
=======
      component: Dashboard
>>>>>>> ba189cef7ab0d483b1e9c9f0c485699449574b7e
    }
  ]
});
