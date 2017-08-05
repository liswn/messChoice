<template>
    <div class="container">
    <router-link :to="'/product/'+type+'/'+id" class="img-a">
      <img class="lazy-loaded product-img" v-lazy-load='cover' alt="">
      </router-link>
      <router-link :to="'/product/'+type+'/'+id" class="title-a" :title="title">
        {{title}}
      </router-link>
      <p class="desc-p" :title="desc">
        {{desc}}
      </p>
    </div>
</template>
<script>
  export default {
    props: {
      id: {
        default: 0
      },
      type: {
        default: 0
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
