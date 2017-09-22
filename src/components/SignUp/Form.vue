<template>
  <div>
    <div class="title">
      主办方信息
    </div>
    <el-row type="flex" class="background">
      <el-form :model="signForm" ref="signForm" :rules="rules" labelWidth="150px">
        <el-form-item label="主办方名称" prop="holderName">
          <el-input v-model="signForm.holderName"></el-input>
        </el-form-item>
        <el-form-item label="主办方类别" prop="holderType">
          <el-select v-model="signForm.holderType" value="">
            <el-option label="个人" value="0">个人</el-option>
            <el-option value="社团">社团</el-option>
            <el-option value="学校">学校</el-option>
            <el-option value="企业">企业</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人用户名" prop="holderId">
          <el-input v-model="signForm.holderId"></el-input>
        </el-form-item>
        <el-form-item label="负责人联系方式" prop="contact">
          <el-input v-model="signForm.contact"></el-input>
        </el-form-item>
        <el-form-item label="地点" prop="place">
          <el-input v-model="signForm.place"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit('signForm')">提交</el-button>
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
        signForm: {
          holderName: '',
          holderType: '',
          holderId: '',
          contact: '',
          place: '',
        },
        typeList: ['个人', '社团', '学校' ,'企业'],
        rules: {
          holderName: { required: true },
          holderType: { required: true },
          holderId: { required: true },
          contact: { required: true },
          place: { required: true },
        },
      }
    },
    methods: {
      onSubmit(formName) {
        console.log(this.$refs);
        this.$refs[formName].validate((valid) =>{
          if (valid) {
            console.log(this.typeList);
            let typeName=this.typeList[parseInt(this.signForm.holderType)];
            console.log(typeName);
            this.$router.push(
              {
                path: 'check/',
                query: {
                  holderName: this.signForm.holderName,
                  holderType: this.signForm.holderType,
                  holderId: this.signForm.holderId,
                  contact: this.signForm.contact,
                  place: this.signForm.place,
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
