<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TopNav/>
    <HeroPesat/>
    <AboutPesat/>
    <ProgramPesat/>
    <ArtikelPesat/>

    <section id="target" class="target section-bg" data-aos="fade-up">
        <div class="container aos-init aos-animate" data-aos="fade-up">

            <div class="section-title">
            <h3 class="text-dark">Untuk Siapa PESAT ini ?</h3>
            </div>

            <div class="row">
                <div class="target-item col-xl-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">
                        <div class="icon text-center"><i class="bi bi-person-fill"></i></div>
                        <p class="fs-5 text-center">Untuk anda yang ingin hartanya menjadi amal sholeh di akhirat</p>
                    </div>
                </div>

                <div class="target-item col-xl-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">
                        <div class="icon text-center"><i class="bi bi-person-fill"></i></div>
                        <p class="fs-5 text-center">Untuk anda yang ingin belajar membiasakan bersedekah setiap pekannya. </p>
                    </div>
                </div>

                <div class="target-item col-xl-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">
                        <div class="icon text-center"><i class="bi bi-person-fill"></i></div>
                        <p class="fs-5 text-center">Untuk anda yang ingin ikut serta dalam perjuangan Al Fatih membangun generasi</p>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">

        <div class="row">
            <div class="col-lg-9 text-center text-lg-start">
            <h3 class="text-center">"Amalan yang paling dicintai oleh Allah Ta’ala adalah amalan yang kontinu walaupun itu sedikit."</h3>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="">Daftar Pejuang</a>
            </div>
        </div>
  
        </div>
    </section>
    <!-- End Cta Section -->

    <FooterPesat/>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import TopNav from "@/components/TopNav.vue";
import HeroPesat from "@/components/HeroPesat.vue";
import AboutPesat from '@/components/AboutPesat.vue';
import ProgramPesat from '@/components/ProgramPesat.vue';
import ArtikelPesat from '@/components/ArtikelPesat.vue';
import FooterPesat from '@/components/FooterPesat.vue';

export default {
    name: 'Home',
    components: {
        /* HelloWorld */
        TopNav,
        HeroPesat,
        AboutPesat,
        ProgramPesat,
        ArtikelPesat,
        FooterPesat,
    },
}
</script>
