<template>
    <div>
      <h1>小计：{{total}}</h1>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
  import bus from '../bus'
    export default {
      data() {
        return {
          msg: ''
        }
      },
      created() {
        bus.$on('toData', (msg) => {
          this.msg = msg
        })
      },
        // props: {
        //   count: {
        //     type: Number
        //   },
        //   price: {
        //     type: Number
        //   }
        // },
      computed: {
          total() {
            return this.$store.state.count * this.$store.state.price
          }
      }
    }
</script>

<style scoped>

</style>
