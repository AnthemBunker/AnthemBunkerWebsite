<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.bundle.min'
  import 'bootstrap/dist/css/bootstrap-reboot.min.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Home from './pages/Home';
  import MainNav from './components/navigation/MainNav';

  export default {
    name: 'app',
    components: {
      Home,
      MainNav
    }
  }
</script>

<style>
  body {
    background-color: #fafafa;
  }

  body > div:nth-child(3) > div > div.theme_dialog__6Jq5S.theme_normal__28zKr.theme_active__3nEFR.Container_dialogLogin__2NplN > section > div > section:nth-child(1) > div > p:nth-child(1) > img {
    max-height: 35px !important;
  }
</style>
