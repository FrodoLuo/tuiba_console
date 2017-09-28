<template>
  <div>
    <div class="title">
      aes加密测试
    </div>
    <aes-card></aes-card>
  </div>
</template>
<script>
  import AesCard from './AESCard.vue'
  export default {
    name: 'cipher-page',
    components: { AesCard }
  }
</script>
<style scoped>
  .title{
    font-size: 36px;
    margin: 20px;
    text-align: left;
  }
  .title:after{
    content: ' ';
    width: 90%;
    height: 1px;
    display: block;
    background-color: black;
  }
  .background{
    height: 100%;
  }
</style>
