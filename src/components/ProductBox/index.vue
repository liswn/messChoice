<template>
    <div class="container">
    <router-link :to="'/product/'+id" class="img-a">
      <img class="lazy-loaded product-img" v-lazy-load='cover' alt="">
      </router-link>
      <router-link :to="'/product/'+id" class="title-a">
        {{title}}
      </router-link>
      <p class="desc-p">
        {{desc}}
      </p>
    </div>
</template>
<script>
  export default {
    props: {
      id: {
        type: String,
        default: ''
      },
      cover: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../assets/theme";
  @import "style";
</style>
