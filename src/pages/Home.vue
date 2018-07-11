<template>
    <div class="home">
      <section id="nav-section">
        <h1 class="text-center" style="font-size:3.25rem;color:rgb(255,255,255);padding-top:80px;">Anthem Bunker</h1>
        <p class="text-center" style="color:rgb(255,255,255);"><em>Safe&nbsp;and&nbsp;Secure&nbsp;Services&nbsp;</em><br><em>for your most valued possessions</em><br></p>
        <div style="text-align: center;">
          <button class="btn btn-primary" type="button" style="border-radius:8px;padding-top:20px;padding-right:32px;padding-bottom:18px;padding-left:32px;margin:5%;">
            <a href="login.html" style="color: white;text-decoration: none;">
              <i class="fa fa-lock"></i>
              LOGIN
            </a>
          </button>
          <button class="btn btn-primary regBtn" type="button" style="border-radius:8px;padding-top:20px;padding-right:32px;padding-bottom:18px;padding-left:32px;margin:5%;background-color:#f9a825;border-color:#f9a825;">
            <a href="login.html" style="color: white;text-decoration: none;">
              <i class="fa fa-user-plus"></i>
              REGISTER
            </a>
          </button>
        </div>
      </section>
    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  #nav-section {
    background: linear-gradient(0deg, rgba(24,38,121,.4), rgba(19,31,99,0.9)), url('../assets/img/data-center.jpg');
  }
</style>
