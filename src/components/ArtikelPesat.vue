<template>
    <div>
        <!-- ======= Artikel Section ======= -->
        <section id="articles" class="articles section-bg" data-aos="fade-up">
            <div class="container aos-init aos-animate" data-aos="fade-up">

                <div class="section-title">
                <h3 class="text-dark">Artikel Terbaru</h3>
                </div>

                <div class="row" v-if="articles.length > 0">
                    <div class="article-item col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100" v-for="itemArticle in articles" :key="itemArticle.id">
                        <div class="icon-box">
                            <router-link v-bind:to="'/article/'+itemArticle.slug">
                                <div v-lazy-container="{ selector: 'img', error: './assets/img/404.jpg', loading: './assets/loading.gif' }">
                                    <img v-bind:data-src="itemArticle.image" class="img-fluid rounded" alt="">
                                </div>
                            </router-link>
                            <h5 class="mt-2 text-start"><router-link v-bind:to="'/article/'+itemArticle.slug">{{ itemArticle.title }}</router-link></h5>
                            <p class="text-start">{{ itemArticle.created_at | formatDate }}</p>
                            <p class="mt-4 fw-bold text-end">
                                <router-link v-bind:to="'/article/'+itemArticle.slug">Selengkapnya...</router-link> 
                                <i class="bi bi-arrow-right-circle"></i>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- End Artikel Section -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ArtikelPesat',
    data() {
        return {
            articles:[],
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/articles")
        .then(res => (this.articles = res.data.data.data))
        .catch(err => console.log(err))
    },
}
</script>