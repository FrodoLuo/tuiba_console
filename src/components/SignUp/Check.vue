<template>
  <div class="background">
    <div class="title">
      主办方信息确认
    </div>
    <el-row type="flex" class="background">
      <el-form labelWidth="150px">
        <el-form-item label="主办方名称">
          <span>{{ formdata.holderName }}</span>
        </el-form-item>
        <el-form-item label="主办方类别">
          <span>{{ formdata.typeName }}</span>
        </el-form-item>
        <el-form-item label="负责人ID">
          <span>{{ formdata.holderId }}</span>
        </el-form-item>
        <el-form-item label="负责人联系方式">
          <span>{{ formdata.contact }}</span>
        </el-form-item>
        <el-form-item label="地点">
          <span>{{ formdata.place }}</span>
        </el-form-item>
        <el-form-item >
          <el-button  type="primary" @click="this.handleSub">提交</el-button>
          <router-link to="/PartySignUp">
            <el-button>取消</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import * as service from '../../service/services';

  export default {
    components: {ElButton},
    name: "check-form",
    data: function(){
      console.log(this.$route);
      return {
        formdata:{
          holderName: this.$route.query.holderName,
          holderType: this.$route.query.holderType,
          typeName: this.$route.query.typeName,
          holderId: this.$route.query.holderId,
          contact: this.$route.query.contact,
          place: this.$route.query.place,
        }
      };
    },
    methods: {
      handleSub: function() {
        service.signUpParty(this.formdata);
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
  span{

    color: darkred;
    display: inline-flex;
    width: 100%;
  }
</style>
