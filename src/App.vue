<template>
  <div id="app">
      <Home></Home>
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
</style>
