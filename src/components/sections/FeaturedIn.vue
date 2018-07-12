<template>
  <div>
    <div id="small-header-carousel">
      <span id="small-label-carousel">As featured in...</span>
    </div>
    <carousel
        class="carousel"
        autoplay
        :per-page="4"
        :pagination-enabled="false"
        :scroll-per-page="false"
        :loop="true">
      <slide><img class="imgSize" src="../../assets/img/Logos/aol.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bing.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bloomberg-businessweek.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bloomberg-tv.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bloomberg-view.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bloomberg.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/bswann.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/business-report.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/cnbc.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/drdave.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/fast-markets.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/fox.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/google.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/ibt.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/jaytaylor.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/market-watch.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/msn.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/reuters.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/sina.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/thestreet.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/usnews.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/wrko.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/wsj.png"></slide>
      <slide><img class="imgSize" src="../../assets/img/Logos/yahoo.png"></slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'FeaturedIn',
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style>
  .carousel {
    background-color:#fafafa;
    padding-top:2%;
    padding-bottom:5%;
  }

  .imgSize {
    width: 160px;
    height: 58px;
  }

  #small-header-carousel {
    text-align:center;
    padding-top:10px;
    padding-bottom:10px;
    background-color:#fafafa;
  }

  #small-label-carousel {
    font-style:italic;
    color:#a2a6af;
  }
</style>
