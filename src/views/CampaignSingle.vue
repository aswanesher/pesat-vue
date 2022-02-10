<template>
    <div class="campaignsingle">
        <TopNav/>

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

            <ol>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/campaigns">Program Sedekah</router-link></li>
            </ol>
            <h2 class="text-start">{{ campaignDetail.campaign_name }}</h2>

            </div>
        </section>
        <!-- End Breadcrumbs -->

        <!-- ======= Campaign Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
            <div class="container">

            <div class="row gy-4">

                <div class="col-lg-8">
                    <div class="portfolio-details-slider swiper">
                        <div class="swiper-wrapper align-items-center">

                            <div class="swiper-slide">
                                <div v-lazy-container="{ selector: 'img', loading: './assets/img/loading.gif', error: './assets/img/404.jpg' }">
                                    <img v-bind:data-src="campaignDetail.campaign_banner" class="img-fluid rounded-top" style="background: #F4A417 !important;" alt="">
                                </div>
                            </div>

                        </div>
                        <div class="portfolio-description" style="border: 1px solid #dee2e6;padding: 20px;margin-top: 30px;border-radius: 10px;">
                            <h2 class="text-start">{{ campaignDetail.campaign_name }}</h2>
                            <p v-html="campaignDetail.description" class="text-start"></p>
                        </div>
                        <a href="" class="btn btn-lg btn-block mt-4" style="width: 100%;background: #F4A417 !important;border-radius:20px">Daftar Jadi Pejuang Sedekah</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="portfolio-info">
                        <h3>Bagikan Artikel</h3>
                    </div>
                    <RelatedCampaign/>
                </div>
            </div>

            </div>
        </section>
        <!-- End Campaign Details Section -->

        <FooterPesat/>
    </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterPesat from '@/components/FooterPesat.vue';
import RelatedCampaign from '@/components/RelatedCampaign.vue';
import axios from 'axios';

export default {
    name: 'CampaignSingle',
    components: {
        TopNav,
        FooterPesat,
        RelatedCampaign,
    },
    data(){
        return {
            campaignDetail: [],
            campaigns: [],
        }
    },
    methods: {
        setDataCampaign(data) {
            //console.log(data)
            this.campaignDetail = data;
        },
    },
    watch: {
        '$route.params.slug': {
            handler: function() {
                axios
                .get("http://127.0.0.1:8000/api/campaigns", {
                    params: {
                        slug: this.$route.params.slug
                    }
                })
                .then(res => (this.setDataCampaign(res.data.data)))
                .catch(err => console.log(err));
            },
        deep: true,
        immediate: true, 
        },
    },
}
</script>