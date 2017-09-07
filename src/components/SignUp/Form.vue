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
            <el-option label="个人" value=0>个人</el-option>
            <el-option label="社团" value=1>社团</el-option>
            <el-option label="学校" value=2>学校</el-option>
            <el-option label="企业" value=3>企业</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人ID" required="" prop="leaderID">
          <el-input v-model="signForm.leaderID"></el-input>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button @click="onSub('signForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElementUI from 'element-ui'
  import Vue from 'vue'
  import * as service from '../../service/services'
  import CheckForm from "./Check.vue";
  import router from '../../router'

  Vue.use(ElementUI);
  export default {
    name: 'signForm',
    components: {CheckForm},
    data() {
      return {
        check: 'no',
        signForm: {
          name: '',
          type: '',
          leaderID: ''
        },
        typeList: {'0':'个人', '1': '社团', '2': '学校', '3': '企业'},
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
      onSub (formName) {
        console.log(formName);
        console.log(this);

        this.$refs[formName].validate((valid) =>{
          if (valid) {
            console.log(this.typeList);
            let typeName=this.typeList[this.signForm.type];
            console.log(typeName);
            this.$router.push(
              {
                path: 'PartySignUp/check/',
                query: {
                  hostName: this.signForm.name,
                  hostType: this.signForm.type,
                  leaderID: this.signForm.leaderID,
                  typeName
                }
              }
            );
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
