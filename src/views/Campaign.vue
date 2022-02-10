<template>
    <div class="campaign">
        <TopNav/>
        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

            <ol>
                <li><router-link to="/">Beranda</router-link></li>
                <li>Program</li>
            </ol>
            <h2 class="text-start">PESAT</h2>

            </div>
        </section>
        <!-- End Breadcrumbs -->

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row campaign-content" v-if="campaigns.length > 0">
                    <div class="col-md-3" v-for="itemCampaign in campaigns" :key="itemCampaign.id">
                        <div class="card mb-4 shadow-sm">
                            <router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug">
                                <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                                    <img v-bind:data-src="itemCampaign.campaign_banner" class="img-fluid rounded-top" style="background: #F4A417 !important;" alt="">
                                </div>
                            </router-link>
                            <div class="card-body">
                                <router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug"><h5 class="text-center">{{ itemCampaign.campaign_name }}</h5></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterPesat/>
    </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterPesat from '@/components/FooterPesat.vue';
import axios from 'axios'

export default {
    name: 'Campaign',
    components: {
        TopNav,
        FooterPesat,
    },
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