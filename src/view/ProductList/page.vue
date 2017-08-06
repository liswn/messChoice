<template>
    <div>
      <div class="crumbs-container">
        <router-link to="/">首页</router-link>
        &gt;
        {{type.name}}
      </div>
      <div class="warp_container">
        <div class="product_container">
          <product-box v-for="(items,productIndex) in type.list"
                       :id="productIndex"
                       :type="typeIndex"
                       :cover="items.cover"
                       :title="items.name"
                       :desc="items.desc"
          ></product-box>
        </div>
      </div>
    </div>
</template>
<script>
  import ProductBox from '../../components/ProductBox/index.vue'
  import types from '../../data/types'
  export default {
    components: {
      ProductBox
    },
    computed: {
      type () {
        return types[this.$route.params.type]
      },
      typeIndex () {
        return this.$route.params.type
      }
    }
  }
</script>
<style scoped lang="less">
  @import "style";
</style>
