<template>
    <div>
      <!--<h1>我是首页</h1>-->
      <!--<router-link :to="{path: '/login',query: {-->
      <!--userinfo: 'name is shanmu'-->
      <!--}}">跳转到登录</router-link>-->
      <!--<button @click="handleGetData">发送数据</button>-->
      <!--<button @click="getJsonp">获得jsonp数据</button>-->
      <!--<button @click="getNoSimple">post非简单请求数据</button>-->
      <!--<button @click="handleEnd">使用Vue脚手架跨域</button>-->
      <div style="border: 1px solid #000; display: flex;">
        <comA :price="price" :count="count"></comA>
        <comB :count="count" @add="add" @reduce="reduce"></comB>
        <h2>单价：{{this.$store.state.price}}</h2>
      </div>
      <input type="text" v-model="count">
      <button @click="changeCount">改变</button>
      <br>
      <button @click="handleAsync">异步操作</button>
    </div>
</template>

<script>
  import axios from 'axios'
  import comA from './comA'
  import comB from './comB'

    export default {
      data() {
        return {
          count: 0,
          price: 20
        }
      },
      components: {
        comA,
        comB
      },
      methods: {
        handleGetData() {
          //必须传第二个参数，服务端一个头，客户端也对应一个withCredentials
          axios.get('http://localhost:3000/getMsg',{
            withCredentials: true
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.log('err',err)
          })
        },
        getJsonp() {
          let script = document.createElement('script');
          let body = document.body
          script.src = 'http://localhost:3000/getJsonp?callback=getData'
          body.appendChild(script)
        },
        getNoSimple() {
          //axios后面不带数据简单请求，带数据非简单请求如下username
          axios.post('http://localhost:3000/noSimple',{username: 'yao'}, {
            withCredentials: true
          }).then(res => {
            console.log(res)
          })
        },
        handleEnd(){
          axios.get('/api/getMsg').then(res => {
            console.log(res)
          })
        },
        add () {
          this.count ++
        },
        reduce() {
          this.count --
        },
        changeCount() {
          this.$store.commit('CHANGE_COUNT',this.count)
        },
        handleAsync() {
          // setTimeout(() => {
          //   this.$store.commit('CHANGE_COUNT', this.count)
          // },1000)
          this.$store.dispatch('handleAsyncAction', 888)
        },
      }
    }
</script>

<style scoped>

</style>
