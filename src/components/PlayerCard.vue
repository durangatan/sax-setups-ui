<template>
  <div class="player-card">
    <h2>{{ name }}</h2>
  <SetupList v-for="setup in setups" v-bind:key="setup.saxophone || setup.misc + String(Math.random())" v-bind:setup="setup"/>
  </div>
</template>

<script>
import SetupList from './SetupList.vue';
export default {
  name: 'PlayerCard',
  props: {
    name: String,
    setups: Array
  },
  components: {
    SetupList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
