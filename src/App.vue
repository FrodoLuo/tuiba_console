<template>
  <div id="app">
    <div class="wrap" id="#wrap">
      <el-row type="flex" class="row-wrap">
        <el-col :span="4" class="nav">
          <tb-header></tb-header>
          <el-menu router defaultActive="/PartySignUp">
            <el-menu-item index="/PartySignUp" disabled="">社团录入</el-menu-item>
            <el-menu-item index="/Cipher" disabled="">AES加密测试</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import tbHeader from './components/tbHeader'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(ElementUI)

  export default {
    name: 'app',
    components: {
      tbHeader
    }
  }
</script>

<style>
  html{
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
  }
  .row-wrap{
    height: 100%;
  }
  .nav{
    height: inherit;
    min-width: 240px;
    background-color: #2d323f;
  }
  .el-menu-item.is-active{
    background-color: white;
    color: #00b5b5;
  }
  .wrap{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>
