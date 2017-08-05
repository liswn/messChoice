<template>
    <div class="container">
      <div class="crumbs-container">
          <router-link to="/">首页</router-link>
        &gt;
        {{product.name}}
      </div>
      <div class="detail_container">
        <div class="previewImg-box">
          <div class="thumbnail-box">
            <div class="thumbnail-items" v-for="(item,index) in product.thumbnails" :class="{active: index === currentThumbnails}" @mouseenter="showThumbnails(index)">
              <div class="thumbnail-small">
                <img class="lazy-loaded" v-lazy-load='item.thumbnail' alt="">
              </div>
              <transition name="fade">
                <div class="previewImg-container" v-show="index === currentThumbnails">
                  <img class="lazy-loaded" v-lazy-load='item.src' alt="">
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="product-intro_container">
            <div class="name">
              {{product.name}}
            </div>
            <p class="desc">{{product.desc}}</p>

            <div class="product-info">
              <p class="info-items" v-for="item in product.infos">
                {{item}}
              </p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
  import products from '../../data/product'
  export default {
    data () {
      return {
        currentThumbnails: 0
      }
    },
    computed: {
      product () {
        return products[this.$route.params.id]
      }
    },
    methods: {
      showThumbnails (index) {
        const that = this
        that.currentThumbnails = index
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/theme";
  @import "style";
</style>
