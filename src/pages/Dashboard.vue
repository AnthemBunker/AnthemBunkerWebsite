<template>
<<<<<<< HEAD
  <div>

  </div>
</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>

<style scoped>

=======
    <div class="home">
      <!-- <TopSectionWithNav></TopSectionWithNav> -->
      <DashboardSection></DashboardSection>
      <!-- <Footer></Footer> -->
    </div>
</template>

<script scoped>
import TopSectionWithNav from "../components/sections/TopSectionWithNav";
import DashboardSection from "../components/sections/DashboardSection";
import Footer from "../components/sections/Footer";

export default {
  name: "Home",
  components: {
    TopSectionWithNav,
    DashboardSection,
    Footer
  }
};
</script>

<style>
>>>>>>> ba189cef7ab0d483b1e9c9f0c485699449574b7e
</style>
