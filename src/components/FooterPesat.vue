<template>
    <div>
        <!-- ======= Footer ======= -->
        <footer id="footer">
        <div class="footer-top">
            <div class="container">
            <div class="row">

                <div class="col-lg-3 col-md-6 footer-contact">
                    <a href="" class="logo me-auto d-flex">
                        <img src="assets/img/logo-pesat.png" alt="" class="img-fluid mb-2" width="110px">
                    </a>
                    <p v-html="about_us" class="text-start"></p>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                <h4 class="text-start">Alamat Kantor</h4>
                    <p class="text-start">Alamat Kantor : Alamat Kantor : Komplek Green Valley Residence Kav.36, Pasirlayung, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40192
                    <br>
                    <strong class="text-start">Telepon : </strong> 081221219646<br>
                    <strong class="text-start">Email : </strong> email.pesat@gmail.com<br>
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                <h4 class="text-start">Menu</h4>
                <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="">Beranda</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="">Program</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="">Artikel</a></li>
                </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                <h4 class="text-start">Media Sosial Kami</h4>
                <div class="social-links mt-3" style="display:inline-block !important;">
                    <a href="" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="" class="youtube"><i class="bx bxl-youtube"></i></a>
                </div>
                </div>

            </div>
            </div>
        </div>

        <div class="container footer-bottom clearfix">
            <div class="copyright">
            &copy; Copyright <strong><span>Pesat</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
            Crafted with <i class="bi bi-suit-heart-fill"></i> by <a href="https://aplikasipenjualan.com/">AplikasiPenjualan.com</a>
            </div>
        </div>
        </footer><!-- End Footer -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FooterPesat',
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