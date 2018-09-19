<template>
    <div>
      <h1>我是详情页</h1>
      接收动态路由参数：{{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "about",
        //实例准备好后挂载
        created () {
            console.log(this.$router)
            console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
