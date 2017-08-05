<template>
    <div>
      <div class="banner_container">
      </div>
      <div class="warp_container">
        <div v-for="(type, typeIndex) in types">
          <h1 class="type-name">{{type.name}}</h1>
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
    </div>
</template>
<script>
  import ProductBox from '../../components/ProductBox/index.vue'
  import types from '../../data/types'
  export default {
    components: {
      ProductBox
    },
    data () {
      return {
        types: types
      }
    }
  }
</script>
<style scoped>
  @import "style.less";
</style>
