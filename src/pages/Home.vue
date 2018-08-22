<template>
    <div class="home">
      <TopSectionWithNav></TopSectionWithNav>
      <FeaturedIn></FeaturedIn>
      <FamilyBrands></FamilyBrands>
      <Footer></Footer>
    </div>
</template>

<script>
import TopSectionWithNav from "../components/sections/TopSectionWithNav";
import FeaturedIn from "../components/sections/FeaturedIn";
import FamilyBrands from "../components/sections/FamilyBrands";
import Footer from "../components/sections/Footer";

export default {
  name: "Home",
  components: {
    TopSectionWithNav,
    FeaturedIn,
    FamilyBrands,
    Footer
  }
};
</script>

<style>
</style>
