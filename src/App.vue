<template>
  <div id="app">
      <MainNav></MainNav>
      <Home></Home>
  </div>
</template>

<script>
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
