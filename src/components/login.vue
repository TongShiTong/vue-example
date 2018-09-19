<template>
    <div>
      <h1>登录页面</h1>
      <input type="text" v-model="username">
      <br>
      <input type="password" v-model="password">
      <button @click="handleSubmit">点击登录</button>
    </div>
</template>

<script>
  import  axios from 'axios'
    export default {
        data () {
          return {
            username: '',
            password: '',
          }
        },
        //快速取到查询字符串
        created () {
          console.log(this.$route.query)
          console.log(this.$route.params)
        },
        methods: {
          handleSubmit () {
            axios.post('http://localhost:3000/login',{username: this.username,password: this.password}).then(res => {
              if(res.data.code == 200){
                alert('登录成功')
                this.$router.push('/')
              }else {
                alert('登录失败')
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
