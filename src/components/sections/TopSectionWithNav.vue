<template>
  <section id="top-section">
    <nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div class="container"><a class="navbar-brand" href="#"><img class="logoBre" src="../../assets/img/logo.png"></a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav ml-auto">
            <li class="dropdown"><a class=" nav-link dropdown-toggle deprt" data-toggle="dropdown" aria-expanded="false" href="#" style="color: white;">Departments</a>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" role="presentation" href="https://www.anthemvault.com/">AnthemVault</a>
                <a class="dropdown-item" role="presentation" href="https://www.amagimetals.com/">AmagiMetals</a>
                <a class="dropdown-item" role="presentation" href="https://www.anthemgold.com/">AnthemGold</a>
                <a class="dropdown-item" role="presentation" href="http://www.anthemvaultprofessional.com/">AnthemVault</a>
                <a class="dropdown-item" role="presentation" href="http://www.anthemnationalreserve.com//">AnthemNationalReserve</a>
                <a class="dropdown-item" role="presentation" href="login.html">AnthemBunker</a>
              </div>
            </li>
          </ul><span class="navbar-text actions"> <a style="color: white;" href="login.html" class="login"><font-awesome-icon :icon="lockIcon" size="sm"></font-awesome-icon> LOGIN</a><a class="btn btn-light action-button sgnUpBtn" role="button" href="login.html" style="border:1px solid #f9a825;border-radius:3px;">SIGN UP</a></span></div>
      </div>
    </nav>
    <h1 class="text-center" style="font-size:3.25rem;color:rgb(255,255,255);padding-top:80px;">Anthem Bunker</h1>
    <p class="text-center" style="color:rgb(255,255,255);"><em>Safe&nbsp;and&nbsp;Secure&nbsp;Services&nbsp;</em><br><em>for your most valued possessions</em><br></p>
    <div style="text-align: center;">
      <button class="btn btn-primary" type="button" style="border-radius:8px;padding-top:20px;padding-right:32px;padding-bottom:18px;padding-left:32px;margin:5%;"><a href="login.html" style="color: white;text-decoration: none;"><font-awesome-icon :icon="lockIcon" size="sm"></font-awesome-icon> LOGIN</a></button>
      <button class="btn btn-primary regBtn" type="button" style="border-radius:8px;padding-top:20px;padding-right:32px;padding-bottom:18px;padding-left:32px;margin:5%;background-color:#f9a825;border-color:#f9a825;"><a href="login.html" style="color: white;text-decoration: none;"><font-awesome-icon :icon="userIcon" size="sm"></font-awesome-icon> REGISTER</a></button>
    </div>
  </section>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons'

  export default {
    name: 'TopSectionWithNav',
    data () {
      return {
        lockIcon: faLock,
        userIcon: faUserPlus
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style scoped>
  #top-section {
    background: linear-gradient(0deg,rgba(24,38,121,.4),rgba(19,31,99,.8)),url('../../assets/img/data-center.jpg');
  }

  .navigation-clean-button {
    background: #fff;
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #333;
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin-bottom: 0
  }

  @media (min-width:768px) {
    .navigation-clean-button {
      padding-top: 1rem;
      padding-bottom: 1rem
    }
  }

  .navigation-clean-button .navbar-brand {
    font-weight: 700;
    color: inherit
  }

  .navigation-clean-button .navbar-brand:hover {
    color: #222
  }

  .navigation-clean-button .navbar-toggler {
    border-color: #ddd;
    color: #888
  }

  .navigation-clean-button .navbar-toggler:focus,
  .navigation-clean-button .navbar-toggler:hover {
    background: 0 0
  }

  .navigation-clean-button .form-inline,
  .navigation-clean-button .navbar-collapse {
    border-top-color: #ddd
  }

  .navigation-clean-button .navbar-nav a.active,
  .navigation-clean-button .navbar-nav>.show>a {
    background: 0 0;
    box-shadow: none
  }

  .navigation-clean-button.navbar-light .navbar-nav a.active,
  .navigation-clean-button.navbar-light .navbar-nav a.active:focus,
  .navigation-clean-button.navbar-light .navbar-nav a.active:hover {
    color: #8f8f8f;
    box-shadow: none;
    background: 0 0;
    pointer-events: none
  }

  .navigation-clean-button.navbar .navbar-nav .nav-link {
    padding-left: 18px;
    padding-right: 18px
  }

  .navigation-clean-button.navbar-light .navbar-nav .nav-link {
    color: #465765
  }

  .navigation-clean-button.navbar-light .navbar-nav .nav-link:focus,
  .navigation-clean-button.navbar-light .navbar-nav .nav-link:hover {
    color: #f9a825!important;
    background-color: transparent
  }

  .navigation-clean-button .navbar-nav>li>.dropdown-menu {
    margin-top: -5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px
  }

  .navigation-clean-button .dropdown-menu .dropdown-item,
  .navigation-clean-button .dropdown-menu .dropdown-item:focus {
    line-height: 2;
    font-size: 14px;
    color: #37434d
  }

  .navigation-clean-button .dropdown-menu .dropdown-item:focus,
  .navigation-clean-button .dropdown-menu .dropdown-item:hover {
    background: #eee;
    color: inherit
  }

  .navigation-clean-button .actions .login {
    margin-right: 1rem;
    text-decoration: none;
    color: #465765
  }

  .navigation-clean-button .navbar-text .action-button,
  .navigation-clean-button .navbar-text .action-button:active,
  .navigation-clean-button .navbar-text .action-button:hover {
    background: #56c6c6;
    border-radius: 20px;
    color: #f9a825;
    box-shadow: none;
    border: none;
    text-shadow: none;
    padding: .5rem 1rem;
    transition: background-color .25s;
    font-size: inherit;
    background-color: rgba(86, 198, 198, 0)
  }

  .navigation-clean-button .navbar-text .action-button:hover {
    background: #66d7d7
  }

  .simple-slider .swiper-slide {
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center
  }

  .simple-slider .swiper-button-next,
  .simple-slider .swiper-button-prev {
    width: 50px;
    margin-left: 20px;
    margin-right: 20px
  }

  @media (max-width:767px) {
    .simple-slider .swiper-slide {
      height: 360px
    }
  }

  nav {
    background-color: transparent !important;
  }

  .logoBre {
    width: 183px;
  }

  .regBtn:hover {
    background-color: #df8c06 !important;
  }

  .sgnUpBtn:hover {
    color: white !important;
    background-color: #f9a825 !important;
  }
</style>
