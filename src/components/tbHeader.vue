<template>
  <div class="header-back">
    <div class="header-wrap">
      <div class="logo">
        <img src="../assets/logo.png" alt="Tuiba">
      </div>
      <div class="title">
        Tuiba后台控制
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tb-header'
  }
</script>
<link rel="" src=""/>
<style scoped>
  .header-back{
    background-color: #00b5b5;
    color: white;
    width: 100%;
    min-height: 40px;
  }
  .header-wrap{
    padding: 20px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .title{
    font-size: 24px;
  }
  .logo>img{
    width: 40px;
    height: auto;
  }
</style>
