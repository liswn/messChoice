<template>
  <div id="app">
    <t-header></t-header>
    <div style="padding-top: 80px">
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
  }
}
</script>
