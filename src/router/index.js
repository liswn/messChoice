import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../view/Homepage/page.vue'
import ProductList from '../view/ProductList/page.vue'
import ProductDetail from '../view/ProductDetail/page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/list/:type',
      component: ProductList
    },
    {
      path: '/product/:type/:id',
      component: ProductDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
