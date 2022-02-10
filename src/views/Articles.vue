<template>
    <div class="articles">
        <TopNav/>
        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

            <ol>
                <li><router-link to="/">Beranda</router-link></li>
                <li>Artikel</li>
            </ol>
            <h2 class="text-start">Artikel</h2>

            </div>
        </section><!-- End Breadcrumbs -->

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row articles-content" v-if="articles.length > 0">
                    <div class="col-md-3" v-for="itemArticle in articles" :key="itemArticle.id">
                        <div class="card mb-4 shadow-sm">
                            <router-link v-bind:to="'/article/'+itemArticle.slug">
                                <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                                    <img v-bind:data-src="itemArticle.image" class="img-fluid rounded-top" alt="">
                                </div>
                            </router-link>
                            <div class="card-body">
                                <router-link v-bind:to="'/article/'+itemArticle.slug"><h5 class="text-start">{{ itemArticle.title }}</h5></router-link>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <small class="text-muted text-start text-small">{{ itemArticle.created_at | formatDate }}</small>
                                    <p class="mt-4 fw-bold text-end">
                                        <router-link v-bind:to="'/article/'+itemArticle.slug">Selengkapnya...</router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <infinite-loading @infinite="infiniteHandler">
                    <div slot="no-more">Tidak ada data lain ditampilkan :)</div>
                </infinite-loading>
            </div>
        </div>

        <FooterPesat/>
    </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterPesat from '@/components/FooterPesat.vue';
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';

export default {
    name:'Articles',
    components: {
        TopNav,
        FooterPesat,
        InfiniteLoading,
    },
    data() {
        return {
            page: 1,
            articles: [],
        };
    },
    methods: {
        infiniteHandler($state) {
        axios.get('http://127.0.0.1:8000/api/articles', {
            params: {
                page: this.page,
            },
        }).then(({ data }) => {
            if (data.data.data.length) {
                this.page += 1;
                this.articles.push(...data.data.data);
                $state.loaded();
            } else {
                $state.complete();
            }
        });
        },
    },
}
</script>