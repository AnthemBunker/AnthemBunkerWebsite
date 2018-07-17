import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import MetamaskSection from './pages/Metamask.vue';

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
      name: 'Metamask',
      component: MetamaskSection,
    }
  ],
});