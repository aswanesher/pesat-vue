<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">

        <div class="container">
            <div class="row" v-if="banners.length > 0">
                <carousel class="hero-items" :items="1" :autoplay="true" :nav="false" data-aos="fade-up" data-aos-delay="200"  v-for="itemBanner in banners" :key="itemBanner.id">
                    <div class="single-hero-items set-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 mt-5">
                                    <h1 class="text-start">{{ itemBanner.text_header }}</h1>
                                    <h2 class="text-start">{{ itemBanner.subtext_header }}</h2>
                                    <div class="d-flex justify-content-center justify-content-lg-start" v-if="itemBanner.button_text != ''">
                                        <a href="" class="btn-register scrollto">{{ itemBanner.button_text }}</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                                        <img v-bind:data-src="itemBanner.image" class="img-fluid rounded" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </carousel>
            </div>
        </div>

    </section><!-- End Hero -->
</template>
<script>

import aos from 'aos'
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
  name: 'HeroPesat',
  components: aos, carousel,
  data() {
      return {
          banners: []
      }
  },
  mounted() {
      axios
      .get("http://127.0.0.1:8000/api/banners")
      .then(res => (this.banners = res.data.data.data))
      .catch(err => console.log(err))
  },
}
</script>