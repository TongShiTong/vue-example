<template>
  <div class="comB">
    <button @click="reduce">-</button>
    <strong>{{ $store.state.count }}</strong>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    methods: {
      reduce(state) {
        this.$store.commit('REDUCE_COUNT')
      },
      add(state) {
        this.$store.commit('ADD_COUNT')
      }
    }
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
