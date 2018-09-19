<template>
  <div class="comB">
    <counter></counter>
  </div>
</template>

<script>
  import counter from './counter'

  export default {
    components: {
      counter
    },
    methods: {

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
