import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../view/Homepage/page.vue'
import ProductDetail from '../view/ProductDetail/page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/product/:id',
      component: ProductDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(1)
    return { x: 0, y: 0 }
  }
})
