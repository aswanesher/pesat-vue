<template>
        <div class="portfolio-description" v-if="articles.length > 0">
            <h5>Artikel Lainnya</h5>
            <div class="col-md-12 col-xs-12 col-sm-12" v-for="itemArticle in articles" :key="itemArticle.id">
                <div class="card mb-4 shadow-sm">
                    <router-link v-bind:to="'/article/'+itemArticle.slug">
                        <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                            <img v-bind:data-src="itemArticle.image" class="img-fluid rounded-top" alt="">
                        </div>
                    </router-link>
                    <div class="card-body">
                        <router-link v-bind:to="'/article/'+itemArticle.slug">
                            <h6>{{ itemArticle.title }}</h6>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RelatedArticle',
    data() {
        return {
            articleDetail: [],
            articles:[],
            slug: this.$route.params.slug,
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/related-articles", {
            params: {
                slug: this.slug,
            },
        })
        .then(res => (this.articles = res.data.data.data))
        .catch(err => console.log(err))
    },
}
</script>