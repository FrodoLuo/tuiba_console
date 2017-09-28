<template>
  <div class="card-wrap">
    <div class="wrap">
      <el-input
        type="textarea"
        placeholder="原文"
        :rows="4"
        v-model="textdata"
      >
        {{ textdata }}
      </el-input>
    </div>
    <div class="wrap">
      <el-input
        type="textarea"
        placeholder="密文"
        :rows="4"
        v-model="cipher"
      >
        {{ cipher }}
      </el-input>
    </div>
    <div class="wrap">
      <el-switch
        v-model="pri"
        onText="密钥"
        offText="公钥"
      >
      </el-switch>
    </div>
    <div class="wrap">
      <el-button
        @click="this.handleCipher"
      >
        加密
      </el-button>
      <el-button
        @click="this.handleDecipher"
      >
        解密
      </el-button>
    </div>
    <div class="note-wrap">
      <pre>
目前采用的是 aes-128-cbc加密
密钥参数为:
公钥:
key: aabbccddeeffgghh
vi: aabbccddeeffgghh
padding: pkcs5padding
密钥:
key: tuituituituibaba
vi: tuituituituibaba
padding: pkcs5padding
      </pre>
    </div>
  </div>
</template>
<script>
  import * as Tool from '../../utils/Tools'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component.vue";
  export default {
    components: {
      ElSwitch,
      ElButton},
    name: 'aes-card',
    data: function() {
      return {
        textdata: '',
        cipher: '',
        pri: false,
      }
    },
    methods: {
      handleCipher: function() {
        if (this.pri) {
          this.cipher = Tool.aesCipherPri(this.textdata);
        } else {
          this.cipher = Tool.aesCipher(this.textdata);
        }
      },
      handleDecipher: function() {
        this.textdata = '密文错误无法解密';
        if (this.pri) {
          this.textdata = Tool.aesDeCipherPri(this.cipher)
        } else {
          this.textdata = Tool.aesDeCipher(this.cipher)
        }
      }
    }
  }
</script>
<style scoped="">
  .note-wrap{
    color: gray;
    text-align: left;
    margin: 20px 10px;
  }
  .wrap{
    margin: 20px 5px;
  }
  .card-wrap{
    width: 80%;
    height: 100%;
  }
</style>
