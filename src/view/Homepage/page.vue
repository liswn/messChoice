<template>
    <div>
      <div class="banner_container">
      </div>
      <div class="warp_container">
        <h1 class="type-name">凉被</h1>
        <div class="product_container">
          <product-box v-for="(items,index) in products"
            :id="index"
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
  import products from '../../data/product'
  export default {
    components: {
      ProductBox
    },
    data () {
      return {
        products: products
      }
    }
  }
</script>
<style scoped>
  @import "style.less";
</style>
