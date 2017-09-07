<template>
  <div class="background">
    <div class="title">
      主办方信息确认
    </div>
    <el-row type="flex" class="background">
      <el-form :model="signForm" ref="signForm" :rules="rules" labelWidth="150px">
        <el-form-item label="主办方名称">
          <span>{{ hostName }}</span>
        </el-form-item>
        <el-form-item label="主办方类别">
          <span>{{ typeName }}</span>
        </el-form-item>
        <el-form-item label="负责人ID">
          <span>{{ leaderID }}</span>
        </el-form-item>
        <el-form-item >
          <el-button @click="onSub('signForm')" type="primary">提交</el-button>
          <router-link to="/PartySignUp">
            <el-button @click="onCancel">取消</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    name: "check-form",
    data: function(){
      console.log(this.$route);
      return {
        hostName: this.$route.query.hostName,
        hostType: this.$route.query.hostType,
        typeName: this.$route.query.typeName,
        leaderID: this.$route.query.leaderID
      };
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
