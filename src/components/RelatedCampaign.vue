<template>
    <div>
        <div class="portfolio-description" v-if="campaigns.length > 0">
            <h5>Program Lainnya</h5>
            <div class="col-md-12 col-xs-12 col-sm-12" v-for="itemCampaign in campaigns" :key="itemCampaign.id">
                <div class="card mb-4 shadow-sm" v-if="itemCampaign.campaign_slug != slug">
                    <router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug" :key="itemCampaign.id">
                        <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                            <img v-bind:data-src="itemCampaign.campaign_banner" class="img-fluid rounded-top" alt="">
                        </div>
                    </router-link>
                    <div class="card-body">
                        <router-link v-bind:to="'/campaign/'+itemCampaign.campaign_slug" :key="itemCampaign.id">
                            <h6 class="text-start">{{ itemCampaign.campaign_name }}</h6>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name:'RelatedCampaign',
    data() {
        return {
            campaignDetail: [],
            campaigns:[],
            slug: this.$route.params.slug,
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/related-campaign", {
            params: {
                slug: this.slug,
            },
        })
        .then(res => (this.campaigns = res.data.data.data))
        .catch(err => console.log(err))
    },
}
</script>