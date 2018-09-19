<template>
    <div class="comB">
      <button @click="reduce">-</button>
      <strong>{{this.$store.state.count}}</strong>
      <button @click="add">+</button>
      <button @click="handleClick">兄弟组件传值</button>
    </div>
</template>

<script>
  // import {mapState} from 'vuex'
  import bus from '../bus'
    export default {
      data() {
        return {
          msg: '来自组件B的内容'
        }
      },
        // props: {
        //   count: {
        //     type: Number
        //   }
        // },
        methods: {
          reduce() {
            this.$store.commit('REDUCE_COUNT')
          },
          add() {
            this.$store.commit('ADD_COUNT')
          },
          handleClick() {
            bus.$emit('toData', this.msg)
          }
        },
        // computed: mapState(['count'])
    }
</script>

<style scoped>
  .comB {
    margin-left: 50px;
  }
  button {
    width: 50px;
    height: 50px;
  }

  strong {
    font-size: 26px;
  }

</style>
