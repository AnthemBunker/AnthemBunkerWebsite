<template>
<div class="metamask-page">
  <TopSectionWithNav></TopSectionWithNav>
  <MetamaskSection></MetamaskSection>
  <Footer></Footer>
</div>
</template>

<script scoped>
import TopSectionWithNav from '../components/sections/TopSectionWithNav';
import MetamaskSection from '../components/sections/MetamaskSection';
import Footer from '../components/sections/Footer';

export default {
  name: 'Metamask',
  components: {
    TopSectionWithNav,
    MetamaskSection,
    Footer
  }
}
</script>

<style>
</style>
