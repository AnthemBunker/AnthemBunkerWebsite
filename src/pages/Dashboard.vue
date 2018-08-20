<template>
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
</style>
