<template>
    <div>
        <!-- ======= Campaign Section ======= -->
        <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h3 class="text-dark">Donasi 10 Ribu Anda Akan Disalurkan Untuk :</h3>
            </div>

            <div class="row" v-if="campaigns.length > 0">
                <div class="article-item col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100" v-for="itemCampaign in campaigns" :key="itemCampaign.id">
                    <div class="icon-box">
                        <router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug">
                            <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                                <img v-bind:data-src="itemCampaign.campaign_banner" class="img-fluid rounded" style="background: #F4A417 !important;" alt="">
                            </div>
                        </router-link>
                        <h5 class="mt-2 text-center"><router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug">{{ itemCampaign.campaign_name }}</router-link></h5>
                    </div>
                </div>
            </div>

            </div>
        </section>
        <!-- End Campaign Section -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProgramPesat',
    data() {
        return {
            campaigns:[]
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/campaigns")
        .then(res => (this.campaigns = res.data.data.data))
        .catch(err => console.log(err))
    },
}
</script>