<template>
  <div class="hello">
    <h1>欢迎,管理员</h1>
    <h2>Welcome, administrator.</h2>
    <br />
    <h2>从左侧选择操作.</h2>
    <h2>Choose Operate from left.</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
