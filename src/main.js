import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import carousel from 'vue-owl-carousel'
import VueLazyload from 'vue-lazyload'
import VueProgressBar from 'vue-progressbar'
import moment from 'moment'
import VueSocialSharing from 'vue-social-sharing'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle'

Vue.config.productionTip = false
Vue.component("carousel", carousel);

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('D MMMM YYYY')
  }
});

Vue.use(VueLazyload)

Vue.use(VueSocialSharing, {
  networks: {
    fakeblock: 'https://fakeblock.com/share?url=@url&title=@title',
  },
})

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

// or with options
const loadimage = require('./assets/loading.gif')
const errorimage = require('./assets/404.jpg')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  error: errorimage,
  attempt: 1,
})

new Vue({
  router,

  components: {
    App,
  },

  render: h => h(App),
  store,

  mounted() {
    AOS.init()
  }
}).$mount('#app')
