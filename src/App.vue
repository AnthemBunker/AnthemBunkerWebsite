<template>
  <div id="app">
      <Home></Home>
  </div>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.bundle.min'
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
</style>
