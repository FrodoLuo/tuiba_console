<template>
  <div>
    <div class="title">
      主办方信息
    </div>
    <el-row type="flex" class="background">
      <el-form :model="form" labelWidth="150px">
        <el-form-item label="主办方名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="主办方类别">
          <el-select v-model="form.type" value="">
            <el-option label="个人" value="0">个人</el-option>
            <el-option value="社团">社团</el-option>
            <el-option value="学校">学校</el-option>
            <el-option value="企业">企业</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人ID">
          <el-input v-model="form.leaderID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="this.onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElementUI from 'element-ui'
  import Vue from 'vue'
  import 'element-ui/lib/theme-default/index.css'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

  Vue.use(ElementUI)
  export default {
    components: {ElButton},
    name: 'form',
    data() {
      return {
        form: {
          name: '',
          type: '',
          leaderID: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form);
      }
    }
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
