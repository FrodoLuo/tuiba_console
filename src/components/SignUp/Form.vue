<template>
  <div>
    <div class="title">
      主办方信息
    </div>
    <el-row type="flex" class="background">
      <el-form :model="signForm" ref="signForm" :rules="rules" labelWidth="150px">
        <el-form-item label="主办方名称" required="" prop="name">
          <el-input v-model="signForm.name"></el-input>
        </el-form-item>
        <el-form-item label="主办方类别" required="" prop="type">
          <el-select v-model="signForm.type" value="">
            <el-option label="个人" value="0">个人</el-option>
            <el-option value="社团">社团</el-option>
            <el-option value="学校">学校</el-option>
            <el-option value="企业">企业</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人ID" required="" prop="leaderID">
          <el-input v-model="signForm.leaderID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSub('signForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElementUI from 'element-ui'
  import Vue from 'vue'
  import 'element-ui/lib/theme-default/index.css'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue"
  import * as service from '../../service/services'

  Vue.use(ElementUI)
  export default {
    components: {ElButton},
    name: 'signForm',
    data() {
      return {
        signForm: {
          name: '',
          type: '',
          leaderID: ''
        },
        rules: {
          name: [
            { required: true, message: '主办方姓名不能为空', trigger: 'change' }
          ],
          type: [
            { required: true, message: '主办方类别不能为空', trigger: 'change' }
          ],
          leaderID: [
            { required: true, message: '负责人ID不能为空', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSub(formName) {
        console.log(formName);
        console.log(this);
        this.$refs[formName].validate((valid) =>{
          if (valid) {
            service.signUpParty(this.signForm)
          } else {
            return false;
          }
        })

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
