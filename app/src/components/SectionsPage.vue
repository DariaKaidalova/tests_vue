<template>
  <ul class="b-list">
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: ['yoga', 'pilates', 'stretching', 'functional training']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .b-list {
    text-align: left;
    display: inline-block;;
  }
</style>
