<template>
    <div class="container">
      <transition name="scroll">
        <div class="defaultHeader" v-show="!scrollHeader">
          <router-link to="/">
            <img class="lazy-loaded logo" src="../../assets/imgs/logo.png" alt="">
          </router-link>
        </div>
      </transition>
      <transition name="scroll">
        <div class="changeHeader" v-show="scrollHeader">
          <div class="main">
            <router-link to="/">
              <img class="lazy-loaded logo" src="../../assets/imgs/logo.png" alt="">
            </router-link>
            <ul class="nav">
              <li class="nav-li">
                <router-link to="/" class="nav-a">
                  首页
                </router-link>
              </li>
              <li class="nav-li" v-for="(item, index) in types"  >
                <router-link :to="'/list/'+index" class="nav-a">
                  {{item.name}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
      <div class="">

      </div>
    </div>
</template>
<script>
  import types from '../../data/types'
  export default {
    data () {
      return {
        scrollHeader: false,
        types: types
      }
    },
    methods: {
      scrollHeaderEvent () {
        const that = this
        let scrollTop = document.body.scrollTop
        that.scrollHeader = (scrollTop > 100)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollHeaderEvent)
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/theme";
  @import "style";
</style>
