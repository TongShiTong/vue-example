<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<ul>-->
        <!--<li>-->
          <!--&lt;!&ndash;<router-link to="/">首页</router-link>&ndash;&gt;-->
          <!--<router-link :to="{name: 'home'}">首页</router-link>-->
          <!--&lt;!&ndash;a标签会刷新当前页面，连接到站外连接用a，例如百度&ndash;&gt;-->
        <!--</li>-->
        <!--<li>-->
          <!--&lt;!&ndash;<router-link to="/about/998">详情页</router-link>&ndash;&gt;-->
          <!--<router-link :to="{name: '详情', params: {id: '我叫参数'}}">详情页</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/login">登录</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  * {
    padding: 0;
    margin: 0;
  }
</style>
