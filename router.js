import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MetamaskSection from './views/Metamask.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ?
    '/' : '/www.anthembunker.com/',
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
