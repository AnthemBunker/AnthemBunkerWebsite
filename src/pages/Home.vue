<template>
    <div class="home">
      <TopSectionWithNav></TopSectionWithNav>
      <FeaturedIn></FeaturedIn>
      <FamilyBrands></FamilyBrands>
      <div class="footer-clean" style="background-color:#1a237e;">
        <footer>
          <div class="container" style="color:#9fa8da;">
            <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                <h3>Info</h3>
                <ul>
                  <li><a href="#">WHY</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">MetaMask</a></li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">Why Us</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Our Legacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li></li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <h3 style="text-align: center;">Social Media</h3>
                <a class="socijalka" href="#"><i class="fa fa-facebook"></i></a>
                <a class="socijalka" href="#"><i class="fa fa-linkedin"></i></a>
                <a class="socijalka" href="#"><i class="fa fa-twitter-square"></i></a>
                <a class="socijalka" href="#"><i class="fa fa-google-plus-square"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div style="background-color:#141d67;">
        <div class="container" style="background-color:#141d67;">
          <div class="row">
            <div class="col">
              <h6 class="text-center" style="color:rgb(190,205,220);"><br>© 2018 Anthem Vault Inc. All rights reserved.<br></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script scoped>

  import TopSectionWithNav from '../components/sections/TopSectionWithNav';
  import FeaturedIn from '../components/sections/FeaturedIn';
  import FamilyBrands from '../components/sections/FamilyBrands';
  import Footer from '../components/sections/Footer';

  export default {
    name: 'Home',
    components: {
      TopSectionWithNav,
      FeaturedIn,
      FamilyBrands,
      Footer
    }
  }
</script>

<style scoped>

</style>
