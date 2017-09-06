<template>
  <div class="background">
    <div class="title">
      主办方信息
    </div>
    <div type="flex">
      <p><span>主办方名称: </span><span class="value">{{ this.$route.hostName }}</span></p>
      <p><span>主办方名称: </span><span class="value">{{ this.$route.hostType }}</span></p>
      <p><span>主办方名称: </span><span class="value">{{ this.$route.hostType}}</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "check-form",
    props: ['hostName', 'hostType', 'leaderID']
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
  p{
    color: black;
    font-size: 24px;
  }
  p .value{
    color: #383851
  }
</style>
