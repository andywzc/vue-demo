

<template>
  <div class="hello">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="验证码" v-model="captcha">
      <img src="" height="45px" width="100px">
    </mt-field>
    <mt-button type="danger" @click="submit"> Login </mt-button>


    <mt-field label="News" placeholder="News" type="textarea" rows="4" v-model="news"></mt-field>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        username: 'i am belong to hello.vue',
        password: 'tab-container 1',
        news: ''
      }
    },
    mounted: function () {
      alert('ready')
    },
    methods: {
      submit: function () {
        alert(this.username)
        alert(this.password)
        alert(this.news)
        this.$router.push({path: '/hello'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 body{
   font-size: 14px;
 }
</style>
