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
        <el-form-item label="学校">
          <span>{{ formdata.schoolName }}</span>
        </el-form-item>
        <el-form-item >
          <el-button  type="primary" @click="this.handleSub">提交</el-button>
          <el-button @click="this.back">取消</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import * as service from '../../service/services';
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component.vue";

  export default {
    components: {
      ElDialog,
      ElButton},
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
          schoolName: this.$route.query.schoolName,
        }
      };
    },
    methods: {
      back: function() {
        this.$router.back();
      },
      handleSub: function() {
        const msgList = {
          9: '负责人用户名不存在',
          54: '社团名已存在',
        };
        const result =service.signUpParty(this.formdata);
        result.then((data) => {
          console.log(data);
          if(data.data.message === 52) {
            this.$msgbox({
              title: '添加成功',
            });
            this.$router.push({
              path: '/'
            })
          } else {
            this.$msgbox({
              title: msgList[data.data.message],
            })
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
  span{

    color: darkred;
    display: inline-flex;
    width: 100%;
  }
</style>
