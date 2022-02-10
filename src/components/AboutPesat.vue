<template>
    <div>
        <!-- ======= About Us Section ======= -->
        <section id="about" class="about">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Apa Itu PESAT ?</h2>
                </div>

                <div class="row content">
                    <div class="col-lg-12 pt-4 pt-lg-0 text-center">
                    <p v-html="about_us"></p>
                    </div>
                </div>

            </div>
        </section>
        <!-- End About Us Section -->
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'AboutPesat',
    data() {
        return{
            about_us: '',
        }
    },
    mounted() {
        axios
        .get("http://127.0.0.1:8000/api/setting")
        .then(res => (this.about_us = res.data.data.about_us))
        .catch(err => console.log(err))
    },
}
</script>