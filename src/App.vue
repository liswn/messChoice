<template>
  <div id="app">
    <t-header></t-header>
    <div style="padding-top: 120px">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from './components/Header/index.vue'
import TFooter from './components/Footer/index.vue'
export default {
  name: 'app',
  components: {
    THeader,
    TFooter
  },
  watch: {
    $route (to, from) {
      window.scrollTo(0, 0)
    }
  }
}
</script>
