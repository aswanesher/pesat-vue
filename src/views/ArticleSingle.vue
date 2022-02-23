<template>
    <div class="articlesingle">
        <TopNav/>

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container text-start">
                <ol>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/articles">Artikel</router-link></li>
                </ol>
                <h2 class="text-start">{{ articleDetail.title }}</h2>
                <small class="text-start">Diposting :  {{ articleDetail.created_at | formatDate }} oleh {{ name }}</small>
            </div>
        </section>
        <!-- End Breadcrumbs -->

        <!-- ======= Portfolio Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
            <div class="container">

            <div class="row gy-4">

                <div class="col-lg-8">
                    <div class="portfolio-details-slider swiper mb-4">
                        <div class="swiper-wrapper align-items-center">

                        <div v-lazy-container="{ selector: 'img', loading: './assets/img/loading.gif', error: './assets/img/404.jpg' }">
                            <img v-bind:data-src="articleDetail.image" class="img-fluid rounded-top" alt="">
                        </div>

                        </div>
                        <div class="portfolio-description mb-3" style="border: 1px solid #dee2e6;padding: 20px;margin-top: 30px;border-radius: 10px;">
                            <p v-html="articleDetail.content" class="text-start"></p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="portfolio-info">
                        <h3>Bagikan Artikel</h3>
                        <ShareNetwork
                            v-for="network in networks"
                            :network="network.network"
                            :key="network.network"
                            :url="'http://pejuangsedekah.id/article/'+articleDetail.slug"
                            :title="title"
                            :description="articleDetail.title"
                            class="btn btn-warning m-1"
                        >
                            <i :class="network.icon"></i>
                            <span class="m-2">{{ network.name }}</span>
                        </ShareNetwork>
                    </div>
                    <RelatedArticle/>
                </div>
            </div>

            </div>
        </section><!-- End Portfolio Details Section -->

        <FooterPesat/>
    </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterPesat from '@/components/FooterPesat.vue';
import RelatedArticle from '@/components/RelatedArticle.vue';
import axios from 'axios';

export default {
    name: 'ArticleSingle',
    components: {
        TopNav,
        FooterPesat,
        RelatedArticle,
    },
    data(){
        return {
            articleDetail: [],
            name: '',
            title: '',
            networks: [
                { network: 'facebook', name: 'Facebook', icon: 'bx bxl-facebook', color: '#1877f2' },
                { network: 'linkedin', name: 'LinkedIn', icon: 'bx bxl-linkedin', color: '#007bb5' },
                { network: 'telegram', name: 'Telegram', icon: 'bx bxl-telegram', color: '#0088cc' },
                { network: 'twitter', name: 'Twitter', icon: 'bx bxl-twitter', color: '#1da1f2' },
                { network: 'whatsapp', name: 'Whatsapp', icon: 'bx bxl-whatsapp', color: '#25d366' },
            ]
        }
    },
    watch: {
        '$route.params.slug': {
            handler: function() {
                axios
                .get("http://127.0.0.1:8000/api/articles", {
                    params: {
                        slug: this.$route.params.slug
                    }
                })
                .then(res => (this.articleDetail = res.data.data, this.name = res.data.data.user.name, this.title = res.data.data.title))
                .catch(err => console.log(err));
            },
        deep: true,
        immediate: true, 
        },
    },
}
</script>