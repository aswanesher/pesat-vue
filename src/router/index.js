import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/campaigns',
    name: 'Program',
    component: () => import('../views/Campaign.vue')
  },
  {
    path: '/campaign/:slug',
    props: true,
    name: 'Detail Program',
    component: () => import('../views/CampaignSingle.vue')
  },
  {
    path: '/articles',
    name: 'Artikel',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article/:slug',
    props: true,
    name: 'Detail Artikel',
    component: () => import('../views/ArticleSingle.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
