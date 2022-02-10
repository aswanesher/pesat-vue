<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">

        <router-link to="/" class="logo me-auto"><img src="assets/img/logo-pesat.png" alt="" class="img-fluid"></router-link>

        <nav id="navbar" class="navbar">
            <ul>
            <li><router-link to="/" class="nav-link scrollto">Beranda</router-link></li>
            <li><router-link to="/campaigns" class="nav-link scrollto">Program</router-link></li>
            <li><router-link to="/articles" class="nav-link scrollto">Artikel</router-link></li>
            <li><a class="login-btn scrollto" href="">Masuk</a></li>
            <li><a class="getstarted scrollto" href="">Daftar</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

        </div>
    </header><!-- End Header -->
</template>
<script>

export default {
  name: 'TopNav',
  props: {
    msg: String
  }
}
</script>