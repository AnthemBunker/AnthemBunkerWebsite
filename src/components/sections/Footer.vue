<template>
  <div>
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
              <font-awesome-icon :icon="facebookIcon"></font-awesome-icon>
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

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faFacebook } from '@fortawesome/free-brands-svg-icons'

  export default {
    name: 'Footer',
    data() {
      return {
        facebookIcon: faFacebook
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style>
  .footer-clean {
    padding: 50px 0;
    background-color: #fff;
    color: #4b4c4d
  }

  .footer-clean h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px
  }

  .footer-clean ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0
  }

  .footer-clean ul a {
    color: inherit;
    text-decoration: none;
    opacity: .8
  }

  .footer-clean ul a:hover {
    opacity: 1
  }

  .footer-clean .item.social {
    text-align: center;
  }

  @media (max-width:768px) {
    .footer-clean .item.social {
      text-align: center
    }
  }

  .footer-clean .item.social>a {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
    margin-top: 22px;
    color: inherit;
    opacity: .75
  }

  .footer-clean .item.social>a:hover {
    opacity: .9
  }

  @media (max-width:991px) {
    .footer-clean .item.social>a {
      margin-top: 40px
    }
  }

  @media (max-width:767px) {
    .footer-clean .item {
      text-align: center;
      padding-bottom: 20px
    }
    .footer-clean .item.social>a {
      margin-top: 10px
    }
  }

  .footer-clean .copyright {
    margin-top: 14px;
    margin-bottom: 0;
    font-size: 13px;
    opacity: .6
  }

  .socijalka {
    transition: transform .2s;
  }

  .socijalka:hover {
    transform: scale(1.2);
  }

</style>
